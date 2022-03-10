import { types } from '../types/types'

const initialState = {
  users: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userAdd:
      return [...state, action.payload]

    case types.handleLogoutUser:
      return { ...initialState }

    default:
      return state
  }
}
