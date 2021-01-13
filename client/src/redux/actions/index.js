import { inGaragePerVehicle } from '../../utils/availableSpots'
import { getSpots } from '../../api/spots-api'
import { getTickets } from '../../api/tickets-api'
import { apiEndpoint } from '../../config'

export const ADD_TICKET = 'ADD_TICKET'
export const RESERVE_SPOT = 'RESERVE_SPOT'
export const DELETE_SPOT = 'DELETE_SPOT'
export const LOGOUT_TICKET = 'LOGOUT_TICKET'
export const LOAD_DB = 'LOAD_DB'
export const SET_USER = 'SET_USER'

const reserveSpot = (garageId, vehicleType, id) => ({
  type: RESERVE_SPOT,
  garageId,
  vehicleType,
  ticketId: id
})

export const loadDb = () => async (dispatch) => {
  const spots = await getSpots(`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkFnbHZIUENCYjJRR0NhWjM4SlR0NSJ9.eyJnaXZlbl9uYW1lIjoiQW5kZXJzIiwiZmFtaWx5X25hbWUiOiJLZW5zYnkiLCJuaWNrbmFtZSI6ImFuZGVycy5rZW5zYnkiLCJuYW1lIjoiQW5kZXJzIEtlbnNieSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHakY2VjFuSllBMi1WMHl6WWVQdWpJWGhMRjRNRnlJMWZqWDRiSk5VUT1zOTYtYyIsImxvY2FsZSI6InN2IiwidXBkYXRlZF9hdCI6IjIwMjEtMDEtMTJUMjM6NDQ6NDguNTMxWiIsImVtYWlsIjoiYW5kZXJzLmtlbnNieUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly95YnNuZWsuZXUuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTEyMzQ0ODIzMzEyOTU1Mjg3NjEwIiwiYXVkIjoiWlFoU2dFOUlkVm1raXN3aEtwdUlZSUFtOXh4T2kwd1AiLCJpYXQiOjE2MTA0OTUwODgsImV4cCI6MTYxMDUzMTA4OCwiYXRfaGFzaCI6IkVheUlZTXNWck40RzlwdmktcHZmVWciLCJub25jZSI6Im5qNlF6NzlUZ2lhejA2dTE4NHh6RnZLLXZuZVFFTFo2In0.fdy2gF7UOfaxSCswvUEjXp-v1XvZpXNl-HrX1EQAuBo45uRIJudCE0nypssic-j_cauVqRB935AI-GFWLirDKk-2_pS4ZZcxQaUZDdXquZ6HridFduWK5Myr_eLU-vrbMiO2YqiHZ-rMgizi3MA48YqAYaRu7ENo_03nHBPxG3sCTpIvT-9HqmKqNKNdEkUFck0ddHSVpmooSi1z77WTKVVSGl3F7rQlcFus9BhNvzB9tKB9urncOePsl4uPl0-_TiO8BolTx5BgM4E34aD7HSe9iOfeioRBwbGf3-l4bTzQojyqxwUaDTCBfP02UGE8RDCNL7psE6_yQXAXiqEBKg`)
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

export const setUser = () => ({
  type: SET_USER
})