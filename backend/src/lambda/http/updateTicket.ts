import {
    APIGatewayProxyHandler,
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from 'aws-lambda'
import 'source-map-support/register'

import { UpdateTicketRequest } from '../../requests/UpdateTicketRequest'
import { updateTicket } from '../../businessLogic/tickets'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("reserveSpot event", event)
    const ticketId = event.pathParameters.ticketId
    const update: UpdateTicketRequest = JSON.parse(event.body)

    const result = await updateTicket(ticketId, update)
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(result)
    }
}