import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNUP_FAILURE,
} from "./user-types";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case SIGNIN_FAILURE:
    case SIGNOUT_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};
export default UserReducer;
