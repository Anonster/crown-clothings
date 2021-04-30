import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  GOOGLE_SIGNIN_START,
  EMAIL_SIGNIN_START,
  CHECK_USER_SESSION,
  SIGNOUT_START,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "./user-types";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebaseUtils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user-action";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* SignInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* onEmailSigininStart() {
  yield takeLatest(EMAIL_SIGNIN_START, SignInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(SIGNOUT_START, signOut);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(SIGNUP_START, signUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapShotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGNUP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onGoogleSigninStart),
    call(onEmailSigininStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpSuccess),
  ]);
}
