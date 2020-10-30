import * as AWS  from 'aws-sdk'
// import * as AWSXRay from 'aws-xray-sdk' // How did it work in the last project !!!!?
const AWSXRay = require('aws-xray-sdk');

import { DocumentClient } from 'aws-sdk/clients/dynamodb'

const XAWS = AWSXRay.captureAWS(AWS)

import { Spot } from '../models/Spot'
import { UpdateSpotRequest } from '../requests/UpdateSpotRequest'

export class SpotAccess {

    constructor(
        private readonly docClient: DocumentClient = createDynamoDBClient(),
        private readonly spotsTable = process.env.SPOTS_TABLE,
        private readonly spotIdIndex = process.env.SPOT_ID_INDEX) {
    }

    async getSpot(spotId): Promise<Spot> {

        const result = await this.docClient.get({
            TableName : this.spotsTable,
            Key: {
                id: spotId
            }
        }).promise()

        const item = result.Item
        return item as Spot
    }

    async getSpots(garageId): Promise<Spot[]> {

        const result = await this.docClient.query({
            TableName : this.spotsTable,
            IndexName : this.spotIdIndex,
            KeyConditionExpression: "garageId = :garageId",
            ExpressionAttributeValues: {
                ":garageId": garageId
            }
        }).promise()

        const items = result.Items
        return items as Spot[]
    }

    async getAllSpots(): Promise<Spot[]> {

        const result = await this.docClient.scan({
            TableName : this.spotsTable,
        }).promise()

        const items = result.Items
        return items as Spot[]
    }

    async createSpot(spot: Spot): Promise<Spot> {
        await this.docClient.put({
          TableName: this.spotsTable,
          Item: spot
        }).promise()
    
        return spot
      }

    async updateSpot(spot: Spot, update: UpdateSpotRequest): Promise<UpdateSpotRequest> {
        const result = await this.docClient.update({
            TableName: this.spotsTable,
            Key:{
                "id": spot.id,
            },
            UpdateExpression: "set ticketId = :ticketId, #free=:free",
            ExpressionAttributeNames: {
                '#free': 'free'
            },
            ExpressionAttributeValues:{
                ":ticketId":update.ticketId,
                ":free":update.free
            },
            ReturnValues:"UPDATED_NEW"
        }).promise()
        
        console.log("updateTodo - result", result)

        // Todo: is this a good return value?
        return update
    }
}

function createDynamoDBClient() {
    // Todo
    if (process.env.IS_OFFLINE) {
        console.log('Creating a local DynamoDB instance')
        return new XAWS.DynamoDB.DocumentClient({
            region: 'localhost',
            endpoint: 'http://localhost:8000'
        })
    }

    return new XAWS.DynamoDB.DocumentClient()
}
