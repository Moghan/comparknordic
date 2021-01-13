import { apiEndpoint } from '../config'
import { Spot } from '../types/Spot'
import Axios from 'axios'

export async function getSpots(idToken: string): Promise<Spot[]> {
  console.log(`Fetching spots - ${apiEndpoint}/spots`)

  const response = await Axios.get(`${apiEndpoint}/spots`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    },
  })
  return response.data.items
}