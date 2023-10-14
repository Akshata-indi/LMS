//Login.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from '../signup/Signup'; // Your signup component
import UserForm from './UserForm';

// import Landing from '../../config-components/landing/Landing';
// import Header2 from '../header/Header2'
// import Header1 from '../header/Header1';

// import Landing from '../../LandingConfig/Landing';
// import Header2 from '../header/Header2'


function User() {
  return (
    <div>
       {/* <Header2/> */}

      
      <div>
        <Router>
          <Routes>
            {/* <Route path="/" element={<UserForm />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/landing" element={<Landing />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default User;

