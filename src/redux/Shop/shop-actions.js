import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from "./shop-types";
import {
  convertSnapshotCollectionToMap,
  firestore,
} from "../../firebase/firebaseUtils";
export const fetchCollectionStart = () => ({
  type: FETCH_COLLECTIONS_START,
});
export const fetchCollectionSuccess = (collectionMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionFailure = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then((snapShot) => {
        const collectionMap = convertSnapshotCollectionToMap(snapShot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};
