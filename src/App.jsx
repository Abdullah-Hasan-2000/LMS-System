import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen.jsx'
import SignupScreen from './screens/SignupScreen.jsx'
import Dashboard from './screens/Dashboard.jsx'
import { auth } from './config/firebase.jsx';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import './App.css'
import { ToastContainer, Bounce, toast } from 'react-toastify'
import AuthRoute from './Route/AuthRoute.jsx'
import ProtectedRoute from './Route/ProtectedRoute.jsx'
import StudentRegistrationScreen from './screens/StudentRegistrationScreen.jsx';
import StudentListScreen from './screens/StudentListScreen.jsx';
import TeacherRegistrationScreen from './screens/TeacherRegistrationScreen.jsx'
import TeacherListScreen from './screens/TeacherListScreen.jsx'
import SubjectAddScreen from './screens/SubjectAddScreen.jsx'
import SubjectListScreen from './screens/SubjectListScreen.jsx'
import SyllabusFormScreen from './screens/SyllabusFormScreen.jsx'
import SyllabusListScreen from './screens/SyllabusListScreen.jsx'
import ClassFormScreen from './screens/ClassFormScreen.jsx'
import ClassListScreen from './screens/ClassListScreen.jsx'
import FeesStructureScreen from './screens/FeesStructureScreen.jsx'
import FeesVoucherScreen from './screens/FeesVoucherScreen.jsx'
import FeesSubmissionScreen from './screens/FeesSubmissionScreen.jsx'
import AdmissionFormScreen from './screens/AdmissionFormScreen.jsx'
import ExamResultsScreen from './screens/ExamResultsScreen.jsx'
import ExamScheduleScreen from './screens/ExamScheduleScreen.jsx'

function App() {

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {

      console.log("User signed out");
      localStorage.removeItem('userId');
      toast.success('Logout successful', {
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
      navigate('/login');
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/dashboard" element={<Dashboard handleSignOut={handleSignOut} />} />
          <Route path="/" element={<Dashboard handleSignOut={handleSignOut} />} />
          <Route path="*" element={<Dashboard handleSignOut={handleSignOut} />} />
          <Route path="/student-registration" element={<StudentRegistrationScreen handleSignOut={handleSignOut} />} />
          <Route path="/student-list" element={<StudentListScreen handleSignOut={handleSignOut} />} />
          <Route path="/teacher-registration" element={<TeacherRegistrationScreen handleSignOut={handleSignOut} />} />
          <Route path="/teacher-list" element={<TeacherListScreen handleSignOut={handleSignOut} />} />
          <Route path="/subject-add" element={<SubjectAddScreen handleSignOut={handleSignOut} />} />
          <Route path="/subject-list" element={<SubjectListScreen handleSignOut={handleSignOut} />} />
          <Route path="/syllabus-form" element={<SyllabusFormScreen handleSignOut={handleSignOut} />} />
          <Route path="/syllabus-list" element={<SyllabusListScreen handleSignOut={handleSignOut} />} />
          <Route path="/class-form" element={<ClassFormScreen handleSignOut={handleSignOut} />} />
          <Route path="/class-list" element={<ClassListScreen handleSignOut={handleSignOut} />} />
          <Route path="/fees-structure" element={<FeesStructureScreen handleSignOut={handleSignOut} />} />
          <Route path="/fees-voucher" element={<FeesVoucherScreen handleSignOut={handleSignOut} />} />
          <Route path="/fees-submission" element={<FeesSubmissionScreen handleSignOut={handleSignOut} />} />
          <Route path="/admission-form" element={<AdmissionFormScreen handleSignOut={handleSignOut} />} />
          <Route path="/exam-results" element={<ExamResultsScreen handleSignOut={handleSignOut} />} />
          <Route path="/exam-schedule" element={<ExamScheduleScreen handleSignOut={handleSignOut} />} />
        </Route>


        <Route element={<ProtectedRoute />}>
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
