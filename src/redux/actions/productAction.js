import { FETCH_START, LOAD_PRODUCT } from "../actionTypes/actionTypes";

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
