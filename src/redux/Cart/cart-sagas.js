import { put, call, takeLatest, all } from "redux-saga/effects";
import { SIGNOUT_SUCCESS } from "../Users/user-types";

import { clearCart } from "./cart-action";
import {} from "./cart-types";

export function* clearCartonSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGNOUT_SUCCESS, clearCartonSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
