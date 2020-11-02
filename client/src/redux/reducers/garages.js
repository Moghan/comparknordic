import { VehicleTypes } from '../../utils/commonInterfaces'
import { garages, rules } from '../../test-data/data'
import {
  ADD_TICKET,
  RESERVE_SPOT,
  DELETE_SPOT,
  LOGOUT_TICKET,
  LOAD_DB
} from '../actions'

const defaultState = {
  garages: [...garages],
  nextTicketId: 1000,
  rules,
  spots: [],
  tickets: []
}

const garagesReducer = (state = defaultState, action) => {
    switch (action.type) {
      case LOAD_DB: {
        return {
          ...state,
          spots: action.spots,
          tickets: action.tickets
        }
      }

      case LOGOUT_TICKET: {
        const filteredTickets = state.tickets.filter((ticket) => ticket.id !== action.ticket.id)
        const newTickets = [...filteredTickets, action.ticket]
        
        const oldSpot = state.spots.find((spot) => spot.ticketId === action.ticket.id)
        const updatedSpot = {
          ...oldSpot,
          free: true,
          ticketId: undefined
        }
        const filteredSpots = state.spots.filter((spot) => spot.ticketId !== action.ticket.id)
        const newSpots = [...filteredSpots, updatedSpot]

        return {
          ...state,
          ticket: newTickets,
          spots: newSpots
        }
      }

      case DELETE_SPOT: {
        return {
          ...state,
          spots: state.spots.filter((spot) => spot.id !== action.spotId) 
        }
      }

      case ADD_TICKET: {
        return {
          ...state,
          tickets: [...state.tickets, action.ticket],
          nextTicketId: state.nextTicketId + 1
        }
      }

      case RESERVE_SPOT:

        const firstFreeSpot = state.spots.find((spot) =>
          spot.free && spot.garageId === action.garageId && spot.vehicleType === VehicleTypes[action.vehicleType])
        const filteredSpots = state.spots.filter((spot ) => spot.id !== firstFreeSpot.id)
        const reservedSpot = {
          ...firstFreeSpot,
          free: false,
          ticketId: action.ticketId
        }

        return {
          ...state,
          spots: [
            ...filteredSpots,
            reservedSpot
          ]
        }

      default:
        return state
    }
  }
  
  export default garagesReducer