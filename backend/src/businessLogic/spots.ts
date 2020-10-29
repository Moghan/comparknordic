import { Spot } from '../models/Spot'
import { SpotAccess } from '../dataLayer/spotAccess'
import { CreateSpotRequest } from '../requests/CreateSpotRequest'
import { UpdateSpotRequest } from '../requests/UpdateSpotRequest'
import { v4 as uuidv4 } from 'uuid'

const spotAccess = new SpotAccess()

export async function getSpot(spotId: string): Promise<Spot> {
  
  return spotAccess.getSpot(spotId)
}

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
    ticketId: undefined,
    floor: createSpotRequest.floor
  })
}

export async function updateSpot(spot: Spot, update: UpdateSpotRequest): Promise<UpdateSpotRequest> {
  return await spotAccess.updateSpot(spot, update)
}
