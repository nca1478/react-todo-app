import React, { useContext, useEffect } from 'react'
import { handleAddTodo } from '../../actions/TodoAction'
import { TodoContext } from '../../context/TodoContext'
import useForm from '../../hooks/useForm'

export const Form = () => {
  const { todos, user, dispatch } = useContext(TodoContext)
  const [{ description }, handleInputChange, handleClearForm] = useForm({
    description: '',
  })

  useEffect(() => {
    document.querySelector('#desc').focus()
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      document.querySelector('#desc').focus()
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
      isEdit: false,
      userId: user.current.id,
    }

    handleAddTodo(newTodo, dispatch)
    handleClearForm()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mt-3">
          <input
            type="text"
            id="desc"
            name="description"
            className="form-control form-control-lg"
            placeholder="Please enter your task to do..."
            aria-label="Enter the Task..."
            aria-describedby="button-submit"
            value={description}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" type="submit" id="button-submit">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
