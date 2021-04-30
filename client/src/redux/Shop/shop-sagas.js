import { all, call, put, takeLatest } from "redux-saga/effects";

import { FETCH_COLLECTIONS_START } from "./shop-types";

import {
  convertSnapshotCollectionToMap,
  firestore,
} from "../../firebase/firebaseUtils";

import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop-actions";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertSnapshotCollectionToMap, snapShot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}
export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
