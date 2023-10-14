import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig'
import { BsBoxArrowInRight } from 'react-icons/bs';
import { TfiEmail } from "react-icons/tfi";
import { TbLock } from "react-icons/tb";

const loginForm2 = () => {
  const inputStyle = TailwindInputsConfig.standard;
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.get(`http://localhost:3001/data?email=${values.email}&password=${values.password}`);
        const loginUser = response.data;

        if (loginUser) {
          navigate('/landing');
        }
      } catch (error) {
        console.log(error);
        alert('Invalid user');
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-white">
      <div className="mx-auto mt-2 p-10 bg-white rounded-xl flex flex-col">

        <h1 className="text-2xl font-bold text-gray-00 p-0">Log in</h1>
        <p className="mt-6 text-gray-600 font-sans text-xs font-semibold">
          Welcome to the Infokalash, please enter your login credentials
        </p>
        <p className="text-gray-600 font-sans text-xs font-semibold">
          below to start using the application
        </p>

        <form className="w-full mt-8" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 text-xs">
            <div className="relative">
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <TfiEmail className="text-gray-400"/>
              </div>
              <input
                className={`${inputStyle} ml-10`}
                type="email"
                name="email"
                placeholder="Email / Username"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
            <div className="relative">
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <TbLock className="text-xl text-gray-400"/>
              </div>
              <input
                className={`${inputStyle} ml-10`}
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>

          <div className="text-right font-sans text-sm font-semibold">
            <Link to="/" className="text-gray-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <div className="border-t border-1 w-full mt-10 mb-3 border-gray-200"></div>

          <div className="mb-6 mt-6 flex items-center justify-between font-sans text-sm font-semibold">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-500 mr-10">
                Remember Me
              </label>
            </div>
            <button type="submit">
              Login
            </button>
          </div>

          <div className="text-center">
            <p className="mt-12 text-gray-600 font-sans text-xs font-semibold">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default loginForm2;
