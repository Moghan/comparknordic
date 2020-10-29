import * as AWS  from 'aws-sdk'
// import * as AWSXRay from 'aws-xray-sdk' // How did it work in the last project !!!!?
const AWSXRay = require('aws-xray-sdk');

import { DocumentClient } from 'aws-sdk/clients/dynamodb'

const XAWS = AWSXRay.captureAWS(AWS)

import { Ticket } from '../models/Ticket'
import { UpdateTicketRequest } from '../requests/UpdateTicketRequest'

export class TicketAccess {

    constructor(
        private readonly docClient: DocumentClient = createDynamoDBClient(),
        private readonly ticketsTable = process.env.TICKETS_TABLE,
        private readonly ticketsGarageIdIndex = process.env.TICKETS_GARAGE_ID_INDEX
    ){}

    async createTicket(ticket: Ticket): Promise<Ticket> {
        await this.docClient.put({
          TableName: this.ticketsTable,
          Item: ticket
        }).promise()
    
        return ticket
    }

    async getTicket(ticketId): Promise<Ticket> {

        const result = await this.docClient.get({
            TableName : this.ticketsTable,
            Key: {
                id: ticketId
            }
        }).promise()

        const item = result.Item
        return item as Ticket
    }

    async getTickets(garageId): Promise<Ticket[]> {

        const result = await this.docClient.query({
            TableName : this.ticketsTable,
            IndexName : this.ticketsGarageIdIndex,
            KeyConditionExpression: "garageId = :garageId",
            ExpressionAttributeValues: {
                ":garageId": garageId
            }
        }).promise()

        const items = result.Items
        return items as Ticket[]
    }

    async getAllTickets(): Promise<Ticket[]> {

        const result = await this.docClient.scan({
            TableName : this.ticketsTable,
        }).promise()

        const items = result.Items
        return items as Ticket[]
    }

    async updateTicket(ticketId: string, update: UpdateTicketRequest): Promise<UpdateTicketRequest> {
        const result = await this.docClient.update({
            TableName: this.ticketsTable,
            Key:{
                "id": ticketId,
            },
            UpdateExpression: "set timeOfDeparture = :timeOfDeparture, cost = :cost",
            ExpressionAttributeValues:{
                ":timeOfDeparture":update.timeOfDeparture,
                ":cost":update.cost
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
