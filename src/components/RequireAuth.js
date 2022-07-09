
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'
import { useLocation } from 'react-router-dom'


export const RequireAuth = ({children}) => {
 const location = useLocation()
 const auth = useAuth()

 if(!auth.user) {
return <Navigate to="/signup" state={{ path: location.pathname }} />
}
  return (
    children
  )
}

//this links to auth.js 
