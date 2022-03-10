import { types } from '../types/types'

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...action.payload,
        logged: true
      }

    case types.authLogout:
      return {
        logged: false
      }

    default:
      return state
  }
}
