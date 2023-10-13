import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm2 from './loginForm2';
import Landing from '../../LandingConfig/Landing';
import Header1 from '../header/Header1';
import Register from '../register/Register'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import lms1 from '../../assets/images/lms1.png'

function Login2() {
  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="w-1/2">
        <Header1 />
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm2 />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </Router>
      </div>

    {/* Right Side - Image Slider */}
    <div className="w-1/2 bg-custom-color p-8 flex items-center justify-center">
      <Carousel showThumbs={false} width="300px">
      
        <div className="text-center w-64 h-64 flex items-center justify-center">
          <img src={lms1} alt="lms1" />
        </div>
     
        <div className="w-64 h-64 flex items-center justify-center">
          <img src={lms1} alt="Image 2" />
        </div>

        <div className="w-64 h-64 flex  items-center justify-center">
          <img src={lms1} alt="Image 3" />
        </div>
      </Carousel>
      </div>
    </div>
  );
}

export default Login2;
