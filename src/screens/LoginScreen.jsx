import { useState } from 'react'
import { auth } from '../config/firebase.jsx'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, Paper } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import InputField from '../components/InputField/InputField.jsx';
import AuthButton from '../components/AuthButton/AuthButton.jsx';
import SnackBar from '../components/SnackBar/SnackBar.jsx';


const LoginScreen = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');



  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login successful with email:", user.email);
        navigate('/dashboard');
        setSnackbarState(true);
        setSnackbarMessage('Login successful!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during login:", errorCode, errorMessage);
        // Show Snackbar with error message
        setSnackbarState(true);
        setSnackbarMessage(errorMessage);

      });

  };
  return (
    <>
      <Box sx={{ paddingTop: "150px" }} >
        <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", width: "500px", margin: "auto" }}>
          <Typography variant="h4" sx={{ marginTop: "10px" }}>
            Login Screen
          </Typography>
          <Typography variant="body2" sx={{ marginY: "15px" }}>
            Welcome to the Bottle Management System...
            <br />Please login to continue.
          </Typography>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
              <InputField onchange={(e) => setEmail(e.target.value)} label="Email" autoComplete="email" type="email" />
              <InputField onchange={(e) => setPassword(e.target.value)} label="Password" type="password" autoComplete="new-password" />
            </div>
            <AuthButton color="primary" value="Login" type="submit" />
          </form>
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Box>

      <SnackBar open={snackbarState} onclose={() => setSnackbarState(false)} message={snackbarMessage} />
    </>
  )
}

export default LoginScreen;