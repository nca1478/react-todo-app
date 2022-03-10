// Dependencies
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bcrypt from 'bcryptjs'

// Actions
import { handleAddUser, handleFindUserByEmail } from '../../actions/UserAction'
import { userLogin } from '../../actions/AuthAction'

// Context
import { TodoContext } from '../../context/TodoContext'

// Hooks
import useForm from '../../hooks/useForm'

export const RegisterScreen = () => {
  const [{ fullName, email, password }, handleInputChange, handleClearForm] =
    useForm({
      fullName: '',
      email: '',
      password: ''
    })
  const { users, dispatch } = useContext(TodoContext)

  useEffect(() => {
    document.querySelector('input').focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = handleFindUserByEmail(email, users)
    if (!user) {
      const newUser = {
        id: new Date().getTime(),
        fullName,
        email,
        password: bcrypt.hashSync(password)
      }

      handleAddUser(newUser, dispatch)
      userLogin(newUser, dispatch)
    } else {
      alert('User already register')
      handleClearForm()
      document.querySelector('#fullName').focus()
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card p-4" style={{ width: '22rem' }}>
        <div className="card-body d-flex flex-column align-items-center animate__animated animate__fadeIn">
          <i className="fas fa-user-plus fa-2x text-primary mb-2"></i>
          <h5 className="card-title mb-4">Sign Up</h5>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control form-control-lg mb-3"
              placeholder="Fullname"
              onChange={handleInputChange}
              value={fullName}
              autoComplete="off"
              required
            />
            <input
              type="email"
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
              Register
            </button>
          </form>

          {/* Go to Login */}
          <Link exact to="/login" className="btn text-primary">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  )
}
