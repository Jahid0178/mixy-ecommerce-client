import { LOAD_PRODUCT } from "../actionTypes/actionTypes";

export const loadProducts = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};
