import {
  EMAIL_SIGNIN_START,
  GOOGLE_SIGNIN_START,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  CHECK_USER_SESSION,
  SIGNOUT_START,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNUP_START,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "./user-types";

export const googleSignInStart = () => ({
  type: GOOGLE_SIGNIN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: SIGNIN_FAILURE,
  action: error,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: SIGNOUT_FAILURE,
  payload: error,
});

export const signUpStart = (user) => ({
  type: SIGNUP_START,
  payload: user,
});

export const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGNUP_SUCCESS,
  payload: { user, additionalData },
});
