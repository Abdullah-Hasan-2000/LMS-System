import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen.jsx'
import SignupScreen from './screens/SignupScreen.jsx'
import Dashboard from './screens/Dashboard.jsx'
import { auth } from './config/firebase.jsx';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import './App.css'
import { ToastContainer, Bounce } from 'react-toastify'

function App() {

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      navigate('/login');
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/dashboard" element={<Dashboard handleSignOut={handleSignOut} />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="*" element={<LoginScreen />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>

  )
}

export default App
