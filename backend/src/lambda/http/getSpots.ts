import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { getAllSpots } from '../../businessLogic/spots'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log("from lambda getSpots EVENT", event)

  const spots = await getAllSpots("9")

  return {
    statusCode: 200,
    body: JSON.stringify({
      items: spots
    }, null, 2),
  };
}
