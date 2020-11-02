import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { getAllSpots } from '../../businessLogic/spots'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log("from lambda getAllSpots EVENT", event)

  const spots = await getAllSpots()

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      items: spots
    }, null, 2),
  };
}
