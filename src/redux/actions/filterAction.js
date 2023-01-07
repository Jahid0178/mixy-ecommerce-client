import { FILTER_PRICE } from "../actionTypes/actionTypes";

export const priceFilter = (data) => {
  return {
    type: FILTER_PRICE,
    payload: data,
  };
};
