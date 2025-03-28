import React from "react";

const SigninHeader = () => {
  return (
    <div className="signin_logo flex justify-center ">
      <img
        src="../public/images/logo.png"
        className="w-20 sm:w-28 md:w-28 lg:w-30 py-2"
      />
      <span className="self-center pl-1">.co.uk</span>
    </div>
  );
};

export default SigninHeader;
