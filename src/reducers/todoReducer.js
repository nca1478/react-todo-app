import { types } from '../types/types'

const initialState = {
  todos: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.todoAdd:
      return [...state, action.payload]

    case types.todoDelete:
      return state.filter((todo) => todo.id !== action.payload)

    case types.todoToggle:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )

    case types.todoEdit:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isEdit: !todo.isEdit } : todo
      )

    case types.todoUpdate:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              desc: action.payload.desc,
              isEdit: !todo.isEdit
            }
          : todo
      )

    case types.todoLogout:
      return { ...initialState }

    default:
      return state
  }
}
