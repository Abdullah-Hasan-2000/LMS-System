import { useState } from 'react'
import { auth } from '../config/firebase.jsx'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputField from '../components/InputField/InputField.jsx';
import AuthButton from '../components/AuthButton/AuthButton.jsx';
import { Link, useNavigate } from 'react-router-dom';

const SignupScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = () => {
        // Here you would typically call your authentication service
        email && password ? createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Signup successful with email:", user.email);
                navigate('/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error during signup:", errorCode, errorMessage);
            }) :
            alert("Please enter your email and password.");
    };

    return (
        <>
            <Box sx={{ paddingTop: "150px" }} >
                <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", width: "500px", margin: "auto" }}>
                    <Typography variant="h4" sx={{ marginTop: "10px" }}>
                        Signup Screen
                    </Typography>
                    <Typography variant="body2" sx={{ marginY: "15px" }}>
                        Welcome to the Bottle Management System...
                        <br />Please sign up to continue.
                    </Typography>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSignup();
                    }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
                            <InputField onchange={(e) => setEmail(e.target.value)} label="Email" autoComplete="email" type="email" />
                            <InputField onchange={(e) => setPassword(e.target.value)} label="Password" type="password" autoComplete="new-password" />
                        </div>
                        <AuthButton color="primary" value="Signup" type="submit" />
                    </form>
                    <Typography variant="body2" sx={{ marginTop: "20px" }}>
                        Already have an account? <Link to="/login">Login</Link>
                    </Typography>
                </Paper>
            </Box>
        </>
    )
}

export default SignupScreen;