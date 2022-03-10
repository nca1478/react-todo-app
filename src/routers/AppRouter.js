import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { TodoScreen } from '../components/todo/TodoScreen'
import { TodoContext } from '../context/TodoContext'
import { AuthRoutes } from './AuthRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(TodoContext)

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Switch>
          <PublicRoute
            isAuthenticated={logged}
            path="/login"
            component={AuthRoutes}
          />
          <PrivateRoute
            exact
            isAuthenticated={logged}
            path="/"
            component={TodoScreen}
          />
        </Switch>
      </div>
    </Router>
  )
}
