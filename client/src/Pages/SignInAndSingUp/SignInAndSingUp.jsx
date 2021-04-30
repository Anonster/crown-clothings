import React from "react";

import SignIn from "../../Components/Signin/SignIn";

import SingUp from "../../Components/SignUp/SignUp";

import "./SignInAndSingUp.scss";

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SingUp />
    </div>
  );
};
export default SignInAndSignUp;
