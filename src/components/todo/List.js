import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { ListItem } from './ListItem'

export const List = () => {
  const { user, todos } = useContext(TodoContext)
  let todosFiltered = todos.filter((todo) => todo.userId === user.current.id)

  return (
    <>
      {todosFiltered.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </>
  )
}
