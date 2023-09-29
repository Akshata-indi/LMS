

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../signup/Signup'; // Your signup component
import LoginForm from './LoginForm';
import Landing from '../../LandingConfig/Landing';


function Login() {
  return (
    <div>
      
    
    <div className="flex justify-center items-center min-h-screen bg-white">
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing" element={<Landing />} />
       
      </Routes>
    </Router>
    </div>
    </div>
  );
}

export default Login;

