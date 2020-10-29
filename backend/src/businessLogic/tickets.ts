import { Ticket } from '../models/Ticket'
import { TicketAccess } from '../dataLayer/ticketAccess'
import { CreateTicketRequest } from '../requests/CreateTicketRequest'
import { UpdateTicketRequest } from '../requests/UpdateTicketRequest'
import { v4 as uuidv4 } from 'uuid'

const ticketAccess = new TicketAccess()



export async function createTicket(
  createTicketRequest: CreateTicketRequest,
): Promise<Ticket> {

  const ticketId = uuidv4()

  return await ticketAccess.createTicket({
    id: ticketId,
    garageId: createTicketRequest.garageId,
    timeOfArrival: 'time_string',
    timeOfDeparture: undefined,
    cost: undefined
  })
}

export async function getTicket(ticketId: string): Promise<Ticket> {
  
  return ticketAccess.getTicket(ticketId)
}

export async function getTickets(garageId: string): Promise<Ticket[]> {
  
  return ticketAccess.getTickets(garageId)
}

export async function getAllTickets(): Promise<Ticket[]> {
  
  return ticketAccess.getAllTickets()
}

export async function updateTicket(ticketId: string, update: UpdateTicketRequest): Promise<UpdateTicketRequest> {
  return await ticketAccess.updateTicket(ticketId, update)
}