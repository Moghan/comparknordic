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
        console.log("logout reducer")
        const newGarages = state.garages.map((garage) => {
          if(garage.id === action.garage.id) {
            const filteredTickets = garage.tickets.filter((ticket) => ticket.id !== action.ticket.id)
            const newTickets = [...filteredTickets, action.ticket]
            return {
              ...garage,
              tickets: newTickets,
              floors: garage.floors.map((floor, index) => {
                return {
                  ...floor,
                  spots: floor.spots.map((spot) => {
                    if(spot.ticketId === action.ticket.id) {
                      return {
                        ...spot,
                        free: true,
                        ticketId: undefined
                      }
                    } else {
                      return spot
                    }
                  })
                }
              })
            }
          } else {
            return garage
          }
        })
        console.log("new garages", newGarages)
        return {
          ...state,
          garages: newGarages
        }
      }
      case DELETE_SPOT: {
        const newGarages = state.garages.map((garage) => {
          if(garage.id === action.garageId) {
            return {
              ...garage,
              floors: garage.floors.map((floor, index) => {
                if(index === action.level) {
                  return {
                    ...floor,
                    spots: floor.spots.filter((spot) => spot.id !== action.spotId) 
                  }
                } else {
                  return floor
                }
              })
            }
          } else {
            return garage
          }
        })
        return {
          ...state,
          garages: newGarages,
        }
      }

      case ADD_TICKET: {
        const newGarages = state.garages.map((garage) => {
          if(garage.id === action.garageId) {
            return {
              ...garage,
              tickets: [...garage.tickets, action.ticket]
            }
          } else {
            return garage
          }
        })
        return {
          ...state,
          garages: newGarages,
          nextTicketId: state.nextTicketId + 1
        }
      }

      case RESERVE_SPOT:
        let resFloor = 0
        let resSpot = 0
        const newGarages = state.garages.map((garage) => {
          if(garage.id === action.garageId) {

            // e.g [-1, 6] -> no free spot on level 0, first free on position 6 on level 1
            const firstFreePerFloor = garage.floors.map((floor) =>
              floor.spots.findIndex((spot) =>
                spot.free && spot.type === VehicleTypes[action.vehicleType]))

            for(const [floorNo, spotNo] of firstFreePerFloor.entries()) {
              if(spotNo !== -1) {
                resFloor = floorNo
                resSpot = spotNo
                break
              }
            }
            return {
              ...garage,
              floors: garage.floors.map((floor, index) => {
                if(index === resFloor) {
                  return {
                    ...floor,
                    spots: floor.spots.map((spot, index) => {
                      if(index === resSpot) {
                        return {
                          ...spot,
                          free: false,
                          ticketId: action.ticketId
                        } 
                      } else {
                        return spot
                      }
                    })
                  }
                } else {
                  return floor
                }
              })
            }
          } else {
            return garage
          }
        })
        return {
          ...state,
          garages: newGarages
        }

      default:
        return state
    }
  }
  
  export default garagesReducer