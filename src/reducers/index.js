import { combineReducers } from 'redux'
import * as actionTypes from '../actions/types'

const initialUserState = {
  currnetUser: null,
  isLoading: true
}

const user_reducer = (state = initialUserState, action) => {
  switch (action.types) {
    case actionTypes.SET_USER:
      return {
        currnetUser: action.payload.currnetUser,
        isLoading: false
      }
      default:
        return state
  }
}

const rootReducer = combineReducers({
  user: user_reducer
})

export default rootReducer