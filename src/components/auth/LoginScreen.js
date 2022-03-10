// Dependencies
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bcrypt from 'bcryptjs'

// Context
import { TodoContext } from '../../context/TodoContext'

// Actions
import { userLogin } from '../../actions/AuthAction'
import { handleFindUserByEmail } from '../../actions/UserAction'

// Hooks
import useForm from '../../hooks/useForm'

export const LoginScreen = ({ history }) => {
  const { users, dispatch } = useContext(TodoContext)
  const [{ email, password }, handleInputChange, handleClearForm] = useForm({
    email: '',
    password: '',
  })

  useEffect(() => {
    document.querySelector('input').focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = handleFindUserByEmail(email, users)
    if (user) {
      let compare = bcrypt.compareSync(password, user.password)
      if (compare) {
        userLogin(user, dispatch)
        history.replace('/')
      } else {
        alert('Access denied')
      }
    } else {
      alert('Email does not exists')
    }

    handleClearForm()
    document.querySelector('input').focus()
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card p-4" style={{ width: '22rem' }}>
        <div className="card-body d-flex flex-column align-items-center animate__animated animate__fadeIn">
          <i className="fas fa-user fa-2x text-primary mb-2"></i>
          <h5 className="card-title mb-4">React ToDo App</h5>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control form-control-lg mb-3"
              placeholder="Email"
              onChange={handleInputChange}
              value={email}
              autoComplete="off"
              required
            />
            <input
              type="password"
              name="password"
              className="form-control form-control-lg mb-3"
              placeholder="Password"
              onChange={handleInputChange}
              value={password}
              required
            />
            <button
              type="submit"
              className="form-control btn btn-primary btn-block btn-lg mb-3"
            >
              Login
            </button>
          </form>

          {/* Go to Register */}
          <Link exact to="/register" className="btn text-primary">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  )
}
