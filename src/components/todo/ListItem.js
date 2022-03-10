import React from 'react'
import { ShowItem } from './ShowItem'
import { EditItem } from './EditItem'

export const ListItem = ({ todo }) => {
  return (
    <>{todo.isEdit ? <EditItem todo={todo} /> : <ShowItem todo={todo} />}</>
  )
}
