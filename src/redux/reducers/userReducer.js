import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
} from "../actionTypes/actionTypes";

const initialState = {
  loading: false,
  currentUser: "",
  email: null,
  phone: null,
  photo: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case REGISTER_START:
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.displayName || action.payload.email,
        email: action.payload.email || "",
        phone: action.payload.phoneNumber || "",
        photo: action.payload.photoURL || "",
        error: null,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
