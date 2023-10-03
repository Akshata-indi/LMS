import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_ENDPOINTS } from '../../api/Api';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig';

const SignupForm = () => {
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
    onSubmit: async (values) => {
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
    <div className="mx-auto mt-2 p-10 bg-white rounded-xl border-2 flex flex-col items-center">
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <p className="mt-8 text-gray-500 font-sans text-lg font-semibold">
          Create a Learning Management System Account
        </p>
        <div className="grid grid-cols-1">
          <input
            className={inputStyle}
            type="text"
            placeholder="First Name"
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
            placeholder="Last Name"
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
            placeholder="Email Id"
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
            placeholder="Password"
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
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500">{formik.errors.confirmPassword}</div>
          )}
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
