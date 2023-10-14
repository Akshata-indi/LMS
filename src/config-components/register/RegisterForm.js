import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_ENDPOINTS } from '../../api/Api';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig';
import registerConfig from './registerConfig.json' // Import the configuration file
import { TfiEmail } from "react-icons/tfi";
import { TbLock } from "react-icons/tb";
import { Link } from 'react-router-dom';

const registerForm = () => {
  const inputStyle = TailwindInputsConfig.standard;

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values, { reset }) => {
      try {
        const userData = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        };

        // Send a POST request to your signup API endpoint using Axios and the API configuration
        const response = await axios.post(API_ENDPOINTS.SIGNUP, userData);

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
      <form className="w-full" onSubmit={formik.handleSubmit}>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 text-xs">
          
          <input
            className={inputStyle}
            type="text"
            placeholder={registerConfig.firstNameLabel}
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500">{formik.errors.firstName}</div>
          )}
          <input
            className={inputStyle}
            type="text"
            placeholder={registerConfig.lastNameLabel}
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500">{formik.errors.lastName}</div>
          )}
          <input
            className={inputStyle}
            type="email"
            placeholder={registerConfig.emailLabel}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
          <input
            className={inputStyle}
            type="password"
            placeholder={registerConfig.passwordLabel}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}
          <input
            className={inputStyle}
            type="password"
            placeholder={registerConfig.confirmPasswordLabel}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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

          <button type="submit" className={`${TwdButtonsConfig.hover} mt-8`}>
              Login
            </button>

            <div className="text-center">
            <p className="mt-12 text-gray-600 font-sans text-xs font-semibold">
              Already have an account?{' '}
              <Link to="/loginForm" className="text-blue-600 hover:underline">
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

export default registerForm;