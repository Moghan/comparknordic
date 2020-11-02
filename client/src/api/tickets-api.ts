import { apiEndpoint } from '../config'
import { Ticket } from '../types/Ticket'
import Axios from 'axios'

export async function getTickets(): Promise<Ticket[]> {
  console.log(`Fetching tickets - ${apiEndpoint}/tickets`)

  const response = await Axios.get(`${apiEndpoint}/tickets`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.data.items
}