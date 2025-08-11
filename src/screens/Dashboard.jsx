import React from 'react'
import ResponsiveAppBar from '../components/Navbar/Navbar.jsx';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import { Box, Paper } from '@mui/material';


const Dashboard = ({ handleSignOut }) => {
  return (
    <>
      <ResponsiveAppBar logoutButton={handleSignOut} />
      <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2 }}>
        <NavigationBar />
        <Box sx={{ marginLeft: 2 }}>
          <Paper elevation={3} sx={{ padding: 2, width: '80vw', height: '100vh' }}>
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard!</p>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard