import React, { useContext } from 'react'
import {
  handleDelete,
  handleEdit,
  handleToggle
} from '../../actions/TodoAction'
import { TodoContext } from '../../context/TodoContext'

export const ShowItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext)

  return (
    <>
      <div
        className="card my-3 animate__animated animate__fadeIn"
        key={todo.id}
      >
        <div className="card-body d-flex align-items-center">
          {/* Check Todo */}
          <div className="flex-shrink-0">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleToggle(todo.id, dispatch)}
            >
              <i
                className={`${todo.done ? 'fas fa-check' : 'fas fa-square'}`}
              ></i>
            </button>
          </div>

          {/* Todo Description */}
          <div className="flex-grow-1 mx-3">
            <h4
              className={`${todo.done ? 'card-title complete' : 'card-title'}`}
              onClick={() => handleToggle(todo.id, dispatch)}
            >
              {todo.desc}
            </h4>
            <p className="card-text lead">
              <b>{todo.done ? 'Completed' : 'Incompleted'}</b>
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            {/* Edit */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                !todo.done && handleEdit(todo.id, dispatch)
              }}
            >
              <i className="fas fa-edit"></i>
            </button>

            {/* Delete */}
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(todo.id, dispatch)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
