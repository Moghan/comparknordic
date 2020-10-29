import {
    APIGatewayProxyHandler,
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from 'aws-lambda'
import 'source-map-support/register'

import { UpdateSpotRequest } from '../../requests/UpdateSpotRequest'
import { updateSpot, getSpot } from '../../businessLogic/spots'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("reserveSpot event", event)
    const spotId = event.pathParameters.spotId
    const update: UpdateSpotRequest = JSON.parse(event.body)

    const spot = await getSpot(spotId)

    const result = await updateSpot(spot, update)
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(result)
    }
}