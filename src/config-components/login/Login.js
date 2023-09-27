

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../signup/Signup'; // Your signup component
import LoginForm from './LoginForm';
import Header from '../header/Header';

function Login() {
  return (
    <div>
      <Header />
    
    <div className="flex justify-center items-center min-h-screen bg-white">
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </div>
    </div>
  );
}

export default Login;

