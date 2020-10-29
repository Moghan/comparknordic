import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { getTicket } from '../../businessLogic/tickets'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log("from lambda getSpots EVENT", event)
  
  const ticketId = event.pathParameters.ticketId
  const ticket = await getTicket(ticketId)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      item: ticket
    }, null, 2),
  };
}
