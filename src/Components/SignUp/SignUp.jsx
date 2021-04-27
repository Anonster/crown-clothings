import React, { useState } from "react";
import "./SignUp.scss";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../Custombutton/Custombutton";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/Users/user-action";
const SignUp = ({ signUpStart }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const handleChange = (event) => {
    switch (event.target.name) {
      case "displayName":
        setDisplayName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "confrimPassword":
        setConfrimPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confrimPassword) {
      alert("Password Doesn't match");
      return;
    }
    signUpStart(displayName, email, password);
  };
  return (
    <div className='sign-up'>
      <h2 className='title'>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confrimPassword'
          value={confrimPassword}
          onChange={handleChange}
          label='Confrim Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
});
export default connect(null, mapDispatchToProps)(SignUp);
