import React from 'react';
import loginConfig from './loginConfig.json';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig'
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
 // Import the configuration file

const LoginForm = () => {
  const inputStyle = TailwindInputsConfig.standard;
  const { rememberMeLabel, forgotPasswordText, signupText, signupUrl } = loginConfig;

  
  return (
    
    <div className="mx-auto mt-2 p-10 bg-white rounded-xl shadow-2xl flex flex-col items-center">
      <BsBoxArrowInRight className="text-6xl text-blue-600 mb-4" />
      <form className="w-full">
      <div className='grid grid-cols-1'>
        <input className={inputStyle} type="email" placeholder="Email / Username" /> 
        <input className={inputStyle} type="password" placeholder="Password" />
      </div>
        
        <div className="mb-6 mt-5 flex items-center justify-between font-sans text-sm font-semibold">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-500 mr-10">
              {rememberMeLabel}
            </label>
          </div>
          <div className="text-right">
            <a href="#" className="text-gray-500 hover:underline">
              {forgotPasswordText}
            </a>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className={`${TwdButtonsConfig.primary}`}>
            Login
          </button>

          <p className="mt-8 text-gray-600 font-sans text-xs font-semibold">
            {signupText}{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
