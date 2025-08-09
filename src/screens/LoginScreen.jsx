import { useState } from 'react'
import { auth } from '../config/firebase.jsx'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputField from '../components/InputField/InputField.jsx';
import AuthButton from '../components/AuthButton/AuthButton.jsx';
import { Bounce, toast } from 'react-toastify';

const LoginScreen = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success('Login successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
        console.log("Login successful with email:", user.email);
        navigate('/dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
        console.error("Error during login:", errorCode, errorMessage);

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
            Welcome to the Learning Management System...
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

    </>
  )
}

export default LoginScreen;