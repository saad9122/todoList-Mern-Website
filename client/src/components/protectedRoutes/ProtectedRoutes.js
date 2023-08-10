import React from 'react'
import { Route, redirect } from 'react-router-dom'

export const ProtectedRoutes = ({component: Component , isLoggedIn, ...rest}) => {
  return (
    <Route>
        {...rest}
        render = {(props) => {
            isLoggedIn ? <Component {...props} /> : <redirect to ="/login" />
        }}
    </Route>
  )
}
