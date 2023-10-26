import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TailwindInputsConfig from '../inputs/TailwindInputsConfig';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import { TfiEmail } from "react-icons/tfi";

const PasswordForm = () => {
  const inputStyle = TailwindInputsConfig.standard;

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Invalid email format'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Add your password recovery logic here (send recovery email, etc.)
        console.log('Password recovery email sent to:', values.email);
        // Optionally, you can redirect to a success page.
      } catch (error) {
        console.log(error);
        // Handle error, e.g., display an error message.
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-white">
      <div className="mx-auto mt-2 p-10 bg-white rounded-xl flex flex-col">

        <h1 className="text-3xl font-semibold text-gray-00 p-0">Password Recovery</h1>
        <p className="mt-6 text-gray-600 font-sans text-xs font-semibold">
          Please fill in the email you have used to create your infokalash acount and
        </p>
        <p className=" text-gray-600 font-sans text-xs font-semibold">
          we will send you a link to reset your password
        </p>

        {/* Container for the form and the horizontal line */}
        <div className="w-full mt-8">
          <form className="grid grid-cols-1 text-xs">
            <div className="relative">
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <TfiEmail className="text-gray-400" />
              </div>
              <input
                className={`${inputStyle} w-60 ml-10`}
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </form>
        
          {/* Horizontal line that aligns with the form */}
          <div className="border-t border-1 w-full mt-6 border-gray-200"></div>
        </div>

        <div className="mt-6 flex font-sans text-sm font-semibold">
          <button type="submit" className={`${TwdButtonsConfig.transparent}`}>
            Reset Password
          </button>
        </div>

        <div className="mt-10 text-center font-sans text-sm font-semibold">
          <Link to="/login2" className="text-gray-500 hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
