import React from 'react'
import ResponsiveAppBar from '../components/Navbar/Navbar.jsx';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import { Box, Paper } from '@mui/material';

const FeesVoucherScreen = ({ handleSignOut }) => {
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
              <h1>Fees Voucher</h1>
              <p>Welcome to the Fees Voucher Screen!</p>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default FeesVoucherScreen