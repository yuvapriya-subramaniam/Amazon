import React from "react";
import { Link } from "react-router-dom";
import useRegister from "../../utils/useRegister"

const Register = ({ updateSignIn }) => {
  const {updateUserRegisterForm, registerUser} = useRegister()
  return (
    <>
      <div className="border-gray-300 border-1 mx-auto rounded-md py-3 px-6 w-60 md:w-100 lg:w-1/4">
        <h1 className="text-2xl">Create account</h1>
        <form onSubmit={registerUser}>
          <label htmlFor="name" className="text-xs font-bold">
            Your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="First and Last name"
            onChange={updateUserRegisterForm}
            className="border-gray-500 border-1 rounded-sm w-full h-7 focus:outline-2 focus:outline-blue-800 focus:outline-offset-2"
          />
          <label htmlFor="email" className="text-xs font-bold">
            Mobile number or email
          </label>
          <input
            type="text"
            id="email"
            onChange={updateUserRegisterForm}
            className="border-gray-500 border-1 rounded-sm w-full h-7 focus:outline-2 focus:outline-blue-800 focus:outline-offset-2"
          />
          <label htmlFor="password" className="text-xs font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={updateUserRegisterForm}
            className="border-gray-500 border-1 rounded-sm w-full h-7 focus:outline-2 focus:outline-blue-800 focus:outline-offset-2"
          />
          <label htmlFor="reenter_password" className="text-xs font-bold">
            Re-enter password
          </label>
          <input
            type="password"
            id="reenter_password"
            onChange={updateUserRegisterForm}
            className="border-gray-500 border-1 rounded-sm w-full h-7 focus:outline-2 focus:outline-blue-800 focus:outline-offset-2"
          />
          <input
            type="submit"
            value="Continue"
            className="bg-yellow-300 rounded-full w-full mt-3 text-[0.8em] py-1 cursor-pointer"
          />
          <p className="text-[0.7em]/4 py-3">
            By continuing, you agree to Amazon's Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <div className="w-80 mx-auto border-red-100 border-3 px-6">
            <span className="text-[0.8em]">
              Already have an account?
              <Link to="/signin" onClick={() => updateSignIn(true)}>
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
