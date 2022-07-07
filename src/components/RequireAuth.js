import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'
import { useLocation } from 'react-router-dom'

export const RequireAuth = ({children}) => {
 const location = useLocation()
 const authLog = useAuth()

 if(!authLog.userLog) {
return <Navigate to="/signup" state={{ path: location.pathname }} />
 }
  return (
    children
  )
}
