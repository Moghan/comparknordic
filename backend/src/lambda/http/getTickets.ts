import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { getTickets } from '../../businessLogic/tickets'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log("from lambda getSpots EVENT", event)
  
  const garageId = event.pathParameters.garageId
  const tickets = await getTickets(garageId)

  return {
    statusCode: 200,
    body: JSON.stringify({
      items: tickets
    }, null, 2),
  };
}
