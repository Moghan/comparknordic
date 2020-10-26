import { SpotItem } from '../models/SpotItem'
import { SpotAccess } from '../dataLayer/spotAccess'

const spotAccess = new SpotAccess()

export async function getAllSpots(garageId: string): Promise<SpotItem[]> {
  
  return spotAccess.getAllSpots(garageId)
}