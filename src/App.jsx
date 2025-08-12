import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen.jsx'
import SignupScreen from './screens/SignupScreen.jsx'
import Dashboard from './screens/Dashboard.jsx'
import { auth } from './config/firebase.jsx';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import './App.css'
import { ToastContainer, Bounce } from 'react-toastify'
import AuthRoute from './Route/AuthRoute.jsx'
import ProtectedRoute from './Route/ProtectedRoute.jsx'
import StudentRegistrationScreen from './screens/StudentRegistrationScreen.jsx';
import StudentListScreen from './screens/StudentListScreen.jsx';
import TeacherRegistrationScreen from './screens/TeacherRegistrationScreen.jsx'
import TeacherListScreen from './screens/TeacherListScreen.jsx'

function App() {

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      localStorage.removeItem('userId');
      window.location.href = '/login';
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/dashboard" element={<Dashboard handleSignOut={handleSignOut} />} />
          <Route path="/" element={<Dashboard handleSignOut={handleSignOut}/>} />
          <Route path="*" element={<Dashboard handleSignOut={handleSignOut} />} />
          <Route path="/student-registration" element={<StudentRegistrationScreen handleSignOut={handleSignOut} />} />
          <Route path="/student-list" element={<StudentListScreen handleSignOut={handleSignOut} />} />
          <Route path="/teacher-registration" element={<TeacherRegistrationScreen handleSignOut={handleSignOut} />} />
          <Route path="/teacher-list" element={<TeacherListScreen handleSignOut={handleSignOut} />} />

        </Route>


        <Route element={<ProtectedRoute/>}>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Route>
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
