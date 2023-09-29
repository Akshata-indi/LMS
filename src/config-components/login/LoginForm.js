import React, { useEffect, useState } from 'react';
import loginConfig from './loginConfig.json';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig'
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { Link,useNavigate}  from 'react-router-dom';
import axios from 'axios';
 // Import the configuration file
 

const LoginForm = () => {
  const inputStyle = TailwindInputsConfig.standard;
  const { rememberMeLabel, forgotPasswordText, signupText, signupUrl } = loginConfig;

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit =  async () => {

    try{
      const response = await axios.get(`http://localhost:3001/data?email=${email}&password=${password}`);

      const loginUser = response.data;
      console.log()

      if(response.data){
       
        navigate("/landing")
        
      }

    }catch(error){
      console.log(error)
      alert("Invalid users")
    }
  }

  

 


  
  
  return (
    
    <div className="mx-auto mt-2 p-10 bg-white rounded-xl shadow-2xl flex flex-col items-center">
      <BsBoxArrowInRight className="text-6xl text-blue-600 mb-4" />
      <form className="w-full" onSubmit={handleSubmit}>
      <div className='grid grid-cols-1'>
        <input className={inputStyle} type="email" placeholder="Email / Username" value={email} onChange={(e) => setEmail(e.target.value)} /> 
        <input className={inputStyle} type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
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
          <button  className={`${TwdButtonsConfig.primary}`}>
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
