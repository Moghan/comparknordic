import { garages } from '../../test-data/data'

const defaultState = [
  ...garages
]

const garagesReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'ADD_GARAGE':
        return [
          ...state,
          action.garage
        ]
      default:
        return state
    }
  }
  
  export default garagesReducer