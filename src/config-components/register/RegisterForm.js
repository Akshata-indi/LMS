import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig';
import { API_ENDPOINTS } from '../../api/Api';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBuildings } from 'react-icons/bi';
import { PiKey } from 'react-icons/pi';
import { TfiEmail } from "react-icons/tfi";
import registerConfig from './registerConfig.json' // Import the configuration file

const RegisterForm = () => {
  const inputStyle = TailwindInputsConfig.standard;

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    // Add more validation rules for other fields (email, password, confirmPassword)
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      // Add more fields here for email, password, and confirmPassword
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Send a POST request to your signup API endpoint using Axios and the API configuration
        const response = await axios.post(API_ENDPOINTS.SIGNUP, values);

        if (response) {
          // Data was successfully saved
          console.log('User data saved successfully.');
          alert('User data saved successfully.');
          formik.resetForm();
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <>
      <div className="mx-auto sm:p-8 md:p-2 bg-white flex flex-col">
        <h1 className="text-2xl font-bold text-gray-00 p-0">Create Account</h1>

      <p className="mt-4 mb-4 text-gray-500 font-sans text-xs font-semibold">
        Welcome to the Infokalash, please enter the details below
      </p>
      <form className="w-full" onSubmit={formik.handleSubmit}> {/* Use formik.handleSubmit here */}
          <div className="grid grid-cols-1 text-xs">
            <div className="relative">
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <AiOutlineUser className=" text-xl text-gray-400" />
              </div>
              <input
                className={`${inputStyle} w-full ml-10`}
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500">{formik.errors.firstName}</div>
            )}

            <div className="relative">
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <BiBuildings className=" text-xl text-gray-400" />
              </div>
              <input
                className={`${inputStyle} w-full ml-10`}
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500">{formik.errors.lastName}</div>
            )}

          <div className="relative">
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          <TfiEmail className=" text-xl text-gray-400"/>
          </div>
          <input
            className={`${inputStyle} w-full ml-10`}
            type="email"
            placeholder={registerConfig.emailLabel}
            name="email"
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
          <PiKey className="text-xl text-gray-400"/>
          </div>
          <input
            className={`${inputStyle} w-full ml-10`}
            type="password"
            placeholder={registerConfig.passwordLabel}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}

          <div className="relative">
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          <PiKey className="text-xl text-gray-400"/>
          </div>
          <input
            className={`${inputStyle} w-full ml-10`}
            type="password"
            placeholder={registerConfig.confirmPasswordLabel}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500">{formik.errors.confirmPassword}</div>
          )}
          

          <div className="flex items-center mt-5 text-xs">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-500 mr-10">
                I've read and accept the Terms of Service
              </label>
          </div>

          <div className="flex items-center mt-4 text-xs">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-500 mr-10">
                Subscribe to the newsletter to stay up to date
              </label>
          </div>

          <button type="submit" className={`${TwdButtonsConfig.transparent} mt-8`}>
            Register
          </button>

          <div className="text-center">
            <p className="mt-8 text-gray-600 font-sans text-xs font-semibold">
              Already have an account?{' '}
              <Link to="/loginForm2" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default RegisterForm;

