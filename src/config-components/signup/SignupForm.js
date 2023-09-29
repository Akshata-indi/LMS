import React from 'react';

import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig'

const SignupForm = () => {

  const inputStyle = TailwindInputsConfig.standard;
  return (
    <div className="mx-auto mt-2 p-10 bg-white rounded-xl border-2 flex flex-col items-center">

      <form className="w-full">
      <p className="mt-8 text-gray-500 font-sans text-lg font-semibold">
            Create a Learning Management System Account
      </p>
       
        <div className='grid grid-cols-1'>
        <input className={inputStyle} type="text" placeholder="First Name" /> 
        <input className={inputStyle} type="text" placeholder="Last Name" /> 
        <input className={inputStyle} type="email" placeholder="Email Id" /> 
        <input className={inputStyle} type="password" placeholder="Password" /> 
        <input className={inputStyle} type="password" placeholder="Confirm Password" /> 
        </div>
        
        <div className="text-center mt-5">
          <button type="submit" className={`${TwdButtonsConfig.primary} text-lg`}>
            Submit
          </button>

          
        </div>
      </form>
    </div>
  );
};

export default SignupForm;