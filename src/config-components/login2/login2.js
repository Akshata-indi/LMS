import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm2 from './loginForm2';
import Landing from '../landing/Landing'
import Header1 from '../header/Header1';
import Register from '../register/Register';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import lms1 from '../../assets/images/lms1.png';

function Login2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Left Side - Login Form */}
        <div className="w-1/2">
          <Header1 />
          <Router>
            <Routes>
              <Route path="/" element={<LoginForm2 />} />
              <Route path="/register" element={<Register />} />
              
              <Route path="/landing" element={<Landing />} />
            </Routes>
          </Router>
        </div>

        {/* Right Side - Image Slider */}
        <div className="w-1/2 bg-custom-color p-8 flex flex-col items-center justify-center relative">
          <Carousel showThumbs={false} width="300px">
            <div className="w-64 h-64 flex items-center justify-center">
              <img src={lms1} alt="lms1" />
            </div>
            <div className="w-64 h-64 flex items-center justify-center">
              <img src={lms1} alt="Image 2" />
            </div>
            <div className="w-64 h-64 flex items-center justify-center">
              <img src={lms1} alt="Image 3" />
            </div>
          </Carousel>

          {/* Additional content below the image */}
          <div className="mt-20 text-center">
            <h2></h2>
            <p>Welcome To New Age Learning Platform</p>
          </div>

          {/* Left and Right Arrow Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 px-3 py-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 px-3 py-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 ml-5 mb-2 text-gray-400 text-xs font-sans">
        &copy; {new Date().getFullYear()} Infokalash, All Rights Reserved | communications@infokalash.com
      </div>
    </>
  );
}

export default Login2;