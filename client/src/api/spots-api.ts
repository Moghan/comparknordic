import { apiEndpoint } from '../config'
import { Spot } from '../types/Spot'
import Axios from 'axios'

export async function getSpots(): Promise<Spot[]> {
  console.log(`Fetching spots - ${apiEndpoint}/spots`)

  const response = await Axios.get(`${apiEndpoint}/spots`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.data.items
}