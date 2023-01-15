import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
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

export const loginStart = () => {
  return {
    type: LOGIN_START,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};
