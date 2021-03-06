import { inGaragePerVehicle } from '../../utils/availableSpots'
import { getSpots } from '../../api/spots-api'
import { getTickets } from '../../api/tickets-api'
import { apiEndpoint } from '../../config'

export const ADD_TICKET = 'ADD_TICKET'
export const RESERVE_SPOT = 'RESERVE_SPOT'
export const DELETE_SPOT = 'DELETE_SPOT'
export const LOGOUT_TICKET = 'LOGOUT_TICKET'
export const LOAD_DB = 'LOAD_DB'

const reserveSpot = (garageId, vehicleType, id) => ({
  type: RESERVE_SPOT,
  garageId,
  vehicleType,
  ticketId: id
})

export const loadDb = () => async (dispatch) => {
  const spots = await getSpots(`${apiEndpoint}/spots`)
  const tickets = await getTickets(`${apiEndpoint}/tickets`)

  dispatch({
    type: LOAD_DB,
    spots,
    tickets
  })
}

export const logoutTicket = (ticket, garage) => {
  return ({
    type: LOGOUT_TICKET,
    garage,
    ticket
  })
}

export const deleteSpot = (spotId, garageId, level) => ({
  type: DELETE_SPOT,
  garageId,
  spotId,
  level
})

export const addTicket = (garageId, vehicleType, ticketId) => {
  const timeOfArrival =  new Date().toISOString()

  return function (dispatch, getState) {
    const { spots } = getState().root.app
    const spotsPerVehicle = inGaragePerVehicle(spots.filter((spot) => spot.garageId === garageId ))
    if(spotsPerVehicle[vehicleType].free) {
      dispatch({
        type: ADD_TICKET,
        ticket: {
          id: ticketId,
          code:ticketId,
          timeOfArrival,
          garageId,
        },
      })
      // Making the reservation here for now.
      dispatch(reserveSpot(garageId, vehicleType, ticketId))
    }
  }
}