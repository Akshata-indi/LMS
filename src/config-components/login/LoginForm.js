import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import { BsBoxArrowInRight } from 'react-icons/bs';

const LoginForm = () => {
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
    onSubmit: async (values) => {
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
    <div className="flex flex-col items-center">
      <div className="mx-auto mt-2 p-10 bg-white rounded-xl shadow-2xl flex flex-col items-center">
        <BsBoxArrowInRight className="text-6xl text-blue-600 mb-4" />
        <form className="w-full" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1">
            <input
              className={inputStyle}
              type="email"
              name="email"
              placeholder="Email / Username"
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
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>

          <div className="mb-6 mt-5 flex items-center justify-between font-sans text-sm font-semibold">
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
            <div className="text-right">
              <Link to="/" className="text-gray-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className={`${TwdButtonsConfig.primary}`}>
              Login
            </button>

            <p className="mt-8 text-gray-600 font-sans text-xs font-semibold">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <p className="mt-8 text-gray-500 font-sans text-base font-semibold">
        Ready to get started?
      </p>
      <p className="mt-8 text-gray-500 font-sans text-base font-semibold">
        Launch Your Project with Us
      </p>
    </div>
  );
};

export default LoginForm;
