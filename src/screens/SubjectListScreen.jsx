import React from 'react'
import ResponsiveAppBar from '../components/Navbar/Navbar.jsx';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import { Box, Paper } from '@mui/material';

const SubjectListScreen = ({ handleSignOut }) => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <ResponsiveAppBar logoutButton={handleSignOut} />
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2 , paddingLeft: 6 }}>
          <div style={{ width: '400px', height: '100vh' }}>
            <NavigationBar />
          </div>
          <Box sx={{ marginLeft: 2, width: '100%' }}>
            <Paper elevation={3} sx={{ paddingX: 2, paddingTop: 2, width: '95%', height: '100vh' }}>
              <h1>Subject List Screen</h1>
              <p>Welcome to the Subject List Screen!</p>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SubjectListScreen