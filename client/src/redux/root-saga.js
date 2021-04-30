import { all, call } from "redux-saga/effects";
import { cartSagas } from "./Cart/cart-sagas";

import { userSagas } from "./Users/user-sagas";

import { shopSagas } from "./Shop/shop-sagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
