import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";

const Login = ({updateSignIn}) => {
  return (
    <>
      <div className="border-gray-300 border-1 mx-auto rounded-md py-3 px-6 w-60 md:w-100 lg:w-1/4">
        <h1 className="text-2xl">Sign in</h1>
        <label htmlFor="signinId" className="text-xs font-bold">
          Email or mobile phone number
        </label>
        <input
          type="email"
          id="signinId"
          className="border-gray-500 border-1 rounded-sm w-full h-7 focus:outline-2 focus:outline-blue-800 focus:outline-offset-2"
        />
        <input
          type="submit"
          value="Continue"
          className="bg-yellow-300 rounded-full w-full mt-3 text-[0.8em] py-1 cursor-pointer"
        />
        <p className="text-[0.7em]/4 py-3">
          By continuing, you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
      </div>
        <div className="w-60 mx-auto text-center md:w-100 lg:w-1/4">
          <div className="pt-4 text-xs text-gray-500 relative before:content-[''] before:absolute before:left-0 before:top-6 before:w-17 md:before:w-37 lg:before:w-25 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:top-6 after:right-0 after:w-17 md:after:w-37 lg:after:w-25 after:h-px after:bg-gray-300">
            New to Amazon?
          </div>
          <div className="my-3">
            <input
              type="button"
              value="Create your Amazon account"
              onClick={() => updateSignIn(false)}
              className="createAccount w-full border-gray-300 border rounded-full text-xs p-2 cursor-pointer bg-white hover:bg-gray-200 transition"
            />
          </div>
        </div>
      
    </>
  )
}

export default Login


