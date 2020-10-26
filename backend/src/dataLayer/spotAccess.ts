import * as AWS  from 'aws-sdk'
// import * as AWSXRay from 'aws-xray-sdk' // How did it work in the last project !!!!?
const AWSXRay = require('aws-xray-sdk');

import { DocumentClient } from 'aws-sdk/clients/dynamodb'

const XAWS = AWSXRay.captureAWS(AWS)

import { SpotItem } from '../models/SpotItem'

export class SpotAccess {

    constructor(
        private readonly docClient: DocumentClient = createDynamoDBClient(),
        private readonly spotsTable = process.env.SPOTS_TABLE,
        private readonly spotIdIndex = process.env.SPOT_ID_INDEX) {
    }

    async getAllSpots(garageId): Promise<SpotItem[]> {

        const result = await this.docClient.query({
            TableName : this.spotsTable,
            IndexName : this.spotIdIndex,
            KeyConditionExpression: "#k_spot = :v_spot",
            ExpressionAttributeNames:{
            "#k_spot": "garageId"
            },
            ExpressionAttributeValues: {
                ":v_spot": garageId
            }
        }).promise()

        const items = result.Items
        return items as SpotItem[]
    }

}

function createDynamoDBClient() {
    // Spot
    if (process.env.IS_OFFLINE) {
        console.log('Creating a local DynamoDB instance')
        return new XAWS.DynamoDB.DocumentClient({
            region: 'localhost',
            endpoint: 'http://localhost:8000'
        })
    }

    return new XAWS.DynamoDB.DocumentClient()
}
