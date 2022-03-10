import { types } from '../types/types'

export const userLogin = (user, dispatch) => {
  dispatch({
    type: types.authLogin,
    payload: { current: user }
  })
}

export const userLogout = (dispatch) => {
  dispatch({
    type: types.authLogout
  })
}
