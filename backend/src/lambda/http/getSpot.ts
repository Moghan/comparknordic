import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { getSpot } from '../../businessLogic/spots'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log("from lambda getSpots EVENT", event)
  
  const spotId = event.pathParameters.spotId
  const spot = await getSpot(spotId)

  return {
    statusCode: 200,
    body: JSON.stringify({
      item: spot
    }, null, 2),
  };
}
