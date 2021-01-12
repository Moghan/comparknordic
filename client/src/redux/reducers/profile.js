import {
  SET_USER
} from '../actions'

const defaultState = {
  name: "defaultName"
}

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER: {
      console.log("profileReducer - SET_USER")
      return {
        ...state
      }
    }
    default:
      return state
  }
}

export default profileReducer