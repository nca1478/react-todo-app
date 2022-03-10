import React, { useEffect, useReducer } from 'react'
import { TodoContext } from '../context/TodoContext'
import { todoReducer } from '../reducers/todoReducer'
import { authReducer } from '../reducers/authReducer'
import { AppRouter } from '../routers/AppRouter'
import { combineReducers } from '../reducers/combineReducers'
import { userReducer } from '../reducers/userReducer'

const init = () => {
  return {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    users: JSON.parse(localStorage.getItem('users')) || [],
    user: JSON.parse(localStorage.getItem('user')) || { logged: false }
  }
}

export const App = () => {
  const [{ todos, user, users }, dispatch] = useReducer(
    combineReducers({
      todos: todoReducer,
      user: authReducer,
      users: userReducer
    }),
    [],
    init
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <TodoContext.Provider value={{ todos, user, users, dispatch }}>
      <AppRouter />
    </TodoContext.Provider>
  )
}
