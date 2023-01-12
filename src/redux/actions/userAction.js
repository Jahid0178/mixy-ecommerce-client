import {
  REGISTER_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
} from "../actionTypes/actionTypes";

export const registerStart = () => {
  return {
    type: REGISTER_START,
  };
};

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

export const registerFail = (err) => {
  return {
    type: REGISTER_FAIL,
    payload: err,
  };
};
