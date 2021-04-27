import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from "./shop-types";

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
