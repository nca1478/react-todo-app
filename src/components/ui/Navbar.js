import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userLogout } from '../../actions/AuthAction'

import { TodoContext } from '../../context/TodoContext'

export const Navbar = () => {
  const { user, dispatch } = useContext(TodoContext)

  const handleLogout = () => {
    userLogout(dispatch)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand fs-2">
            toDo App
          </Link>
          <span className="text-light h5 m-0">{`Hello, ${user.current.fullName}`}</span>
          <form>
            <Link
              exact
              to="/login"
              className="btn btn-outline-light"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </form>
        </div>
      </nav>
    </>
  )
}
