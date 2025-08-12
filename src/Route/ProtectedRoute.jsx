import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'
const ProtectedRoute = () => {
  return !localStorage.getItem('userId') ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute