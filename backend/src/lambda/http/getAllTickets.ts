import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { getAllTickets } from '../../businessLogic/tickets'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log("from lambda getAllSpots EVENT", event)

  const tickets = await getAllTickets()

  return {
    statusCode: 200,
    body: JSON.stringify({
      items: tickets
    }, null, 2),
  };
}
