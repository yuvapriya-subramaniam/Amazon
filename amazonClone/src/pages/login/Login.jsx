import React, {useState} from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import SigninHeader from "../../components/SigninHeader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BASE_URL } from '../../utils/constants';


const Login = ({updateSignIn}) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password:""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginCredentials(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleLoginSubmit = async () => {
    try {
      const user = await axios.post(BASE_URL+"/user/login",{
        email: loginCredentials.email,
        password: loginCredentials.password
      },{
        withCredentials: true 
      })
      // console.log(user);
      
      // user.status !== 200 && setError(user.data);
      
      dispatch(addUser(user.data));
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  }


  return (
    <div id="userSignin" className="">
      <SigninHeader />
      <div className="border-gray-300 border-1 mx-auto rounded-md py-3 px-6 w-60 md:w-100 lg:w-1/4">
        <h1 className="text-2xl">Sign in</h1>
        <label htmlFor="email" className="text-sm font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={loginCredentials.email}
          onChange={handleChange}
          className="border-gray-500 border-1 rounded-sm w-full h-7 focus:outline-2 focus:outline-blue-800 focus:outline-offset-2"
        /><br/>
        <label htmlFor="password" className="text-sm font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={loginCredentials.password}
          onChange={handleChange}
          className="border-gray-500 border-1 rounded-sm w-full h-7 focus:outline-2 focus:outline-blue-800 focus:outline-offset-2"
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <input
          type="submit"
          value="Continue"
          onClick={handleLoginSubmit}
          className="bg-yellow-300 rounded-full w-full mt-3 text-[0.8em] py-1 cursor-pointer"
        />
        <p className="text-[0.7em]/4 py-3">
          By continuing, you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
      </div>
        <div className="w-60 mx-auto text-center md:w-100 lg:w-1/4 ">
          <div className="pt-4 text-xs text-gray-500 relative before:content-[''] before:absolute before:left-0 before:top-6 before:w-17 md:before:w-37 lg:before:w-25 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:top-6 after:right-0 after:w-17 md:after:w-37 lg:after:w-25 after:h-px after:bg-gray-300">
            New to Amazon?
          </div>
          <div className="my-3 createAccount border-gray-300 border rounded-full text-xs p-2 cursor-pointer bg-white hover:bg-gray-200 transition">
            <Link to="/register">Create your Amazon account</Link>
          </div>
        </div>
      
    </div>
  )
}

export default Login


