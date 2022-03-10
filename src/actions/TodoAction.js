import { types } from '../types/types'

export const handleAddTodo = (newTodo, dispatch) => {
  dispatch({
    type: types.todoAdd,
    payload: newTodo
  })
}

export const handleDelete = (todoId, dispatch) => {
  dispatch({
    type: types.todoDelete,
    payload: todoId
  })
}

export const handleToggle = (todoId, dispatch) => {
  dispatch({
    type: types.todoToggle,
    payload: todoId
  })
}

export const handleEdit = (todoId, dispatch) => {
  dispatch({
    type: types.todoEdit,
    payload: todoId
  })
}

export const handleUpdate = (data, dispatch) => {
  dispatch({
    type: types.todoUpdate,
    payload: data
  })
}

export const handleLogoutTodo = (dispatch) => {
  dispatch({
    type: types.todoLogout
  })
}
