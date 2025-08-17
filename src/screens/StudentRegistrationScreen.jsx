import React from 'react'
import ResponsiveAppBar from '../components/Navbar/Navbar.jsx';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import { Box, Paper } from '@mui/material';
import InputField from '../components/InputField/InputField.jsx';


const StudentRegistrationScreen = ({ handleSignOut }) => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <ResponsiveAppBar logoutButton={handleSignOut} />
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2, paddingLeft: 6 }}>
          <div style={{ width: '400px', height: '100vh' }}>
            <NavigationBar />
          </div>
          <Box sx={{ marginLeft: 2, width: '100%' }}>
            <Paper elevation={3} sx={{ paddingX: 2, paddingTop: 2, width: '95%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h1>Student Registration Form</h1>

              <form action="">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '500px', gap: '30px', marginTop: '20px' }}>
                  <InputField label="First Name" type="text" required />
                  <InputField label="Second Name" type="text" required />
                  <InputField label="Email" type="email" required />
                  <InputField label="Class" type="text" required />
                </Box>
              </form>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default StudentRegistrationScreen