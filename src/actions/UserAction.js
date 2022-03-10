import { types } from '../types/types'

export const handleAddUser = (newUser, dispatch) => {
  dispatch({
    type: types.userAdd,
    payload: newUser
  })
}

export const handleFindUser = (email, password, users) => {
  return users.find(
    (user) => user.email === email && user.password === password
  )
}

export const handleFindUserByEmail = (email, users) => {
  return users.find((user) => user.email === email)
}

export const handleLogoutUser = (dispatch) => {
  dispatch({
    type: types.handleLogoutUser
  })
}
