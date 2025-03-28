import React, { useState } from "react";
import SigninHeader from "../../components/SigninHeader";
import Login from "./Login"
import Register from "./Register"
const UserLoginRegister = () => {
  const [signIn, setSignIn] = useState(true);

  const updateSignIn = (state) => setSignIn(state)

  return (
    <div id="userSignin" className="">
      <SigninHeader />
      {signIn ? <Login updateSignIn = {updateSignIn}/> : <Register updateSignIn = {updateSignIn}/>}
    </div>
  );
};

export default UserLoginRegister;
