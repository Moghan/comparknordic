import { Spot } from '../models/Spot'
import { SpotAccess } from '../dataLayer/spotAccess'
import { CreateSpotRequest } from '../requests/CreateSpotRequest'
import { v4 as uuidv4 } from 'uuid'

const spotAccess = new SpotAccess()

export async function getSpots(garageId: string): Promise<Spot[]> {
  
  return spotAccess.getSpots(garageId)
}

export async function getAllSpots(): Promise<Spot[]> {
  
  return spotAccess.getAllSpots()
}

export async function createSpot(
  createSpotRequest: CreateSpotRequest,
): Promise<Spot> {

  const spotId = uuidv4()

  return await spotAccess.createSpot({
    id: spotId,
    garageId: createSpotRequest.garageId,
    vehicleType: createSpotRequest.vehicleType,
    free: true,
    ticket: undefined
  })
}
