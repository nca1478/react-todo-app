import React, { useContext, useEffect } from 'react'
import {
  handleEdit,
  handleToggle,
  handleUpdate
} from '../../actions/TodoAction'
import { TodoContext } from '../../context/TodoContext'
import useForm from '../../hooks/useForm'

export const EditItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext)
  const [{ description }, handleInputChange] = useForm({
    description: todo.desc
  })

  useEffect(() => {
    document.querySelector('#description').focus()
  }, [todo])

  return (
    <>
      <div className="card my-3" key={todo.id}>
        <div className="card-body d-flex align-items-center">
          {/* Check Todo */}
          {todo.isEdit ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleToggle(todo.id, dispatch)}
              disabled
            >
              <i
                className={`${todo.done ? 'fas fa-check' : 'fas fa-square'}`}
              ></i>
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleToggle(todo.id, dispatch)}
            >
              <i
                className={`${todo.done ? 'fas fa-check' : 'fas fa-square'}`}
              ></i>
            </button>
          )}

          {/* Todo Description */}
          <div className="flex-grow-1 mx-3">
            <input
              className="form-control"
              type="text"
              id="description"
              name="description"
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
              style={{ fontSize: '1.5rem' }}
            />
          </div>

          {/* Action Buttons */}
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            {/* Save */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                handleUpdate({ id: todo.id, desc: description }, dispatch)
              }
            >
              <i className="fas fa-save"></i>
            </button>

            {/* Cancel */}
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleEdit(todo.id, dispatch)}
            >
              <i className="fas fa-window-close"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
