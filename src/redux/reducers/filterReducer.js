import { FILTER_PRICE } from "../actionTypes/actionTypes";

const initialState = {
  price: 50,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
