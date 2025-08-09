import React from 'react'
import ResponsiveAppBar from '../components/Navbar/Navbar.jsx';

const Dashboard = ({handleSignOut}) => {
  return (
    <>
      <ResponsiveAppBar logoutButton={handleSignOut}  />
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>     
    </>
  )
}

export default Dashboard