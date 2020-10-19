import * as uuid from 'uuid'
import { inGaragePerVehicle } from '../../utils/availableSpots'

export const ADD_TICKET = 'ADD_TICKET'
export const RESERVE_SPOT = 'RESERVE_SPOT'

const reserveSpot = (garageId, vehicleType, id) => ({
  type: RESERVE_SPOT,
  garageId,
  vehicleType,
  ticketId: id
})

export const addTicket = (garageId, vehicleType, ticketId = 0) => {
  const timeOfArrival =  new Date().toISOString()

  return function (dispatch, getState) {
    console.log("getstate", getState())
    const currentGarage = getState().root.app.garages.filter((garage) => garage.id === garageId)[0]
    const spots = inGaragePerVehicle(currentGarage)
    if(spots[vehicleType].free) {
      dispatch({
        type: ADD_TICKET,
        ticket: {
          ticketId,
          timeOfArrival
        },
        garageId: garageId,
      })
      // Making the reservation here for now.
      dispatch(reserveSpot(garageId, vehicleType, ticketId))
    }
  }
}