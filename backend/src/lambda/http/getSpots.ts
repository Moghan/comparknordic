import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { getSpots } from '../../businessLogic/spots'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log("from lambda getSpots EVENT", event)
  
  const garageId = event.pathParameters.garageId
  const spots = await getSpots(garageId)

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
