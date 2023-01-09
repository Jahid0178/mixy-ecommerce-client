import {
  FETCH_START,
  LOAD_PRODUCT,
  SINGLE_PRODUCT,
} from "../actionTypes/actionTypes";

export const loadProducts = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};

export const loadingStart = () => {
  return {
    type: FETCH_START,
  };
};

export const singleProduct = (data) => {
  return {
    type: SINGLE_PRODUCT,
    payload: data,
  };
};
