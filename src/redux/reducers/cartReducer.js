import { ADD_TO_CART } from "../actionTypes/actionTypes";

const initialState = {
  cartProducts: [],
  productCount: 0,
};

const cartReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
        productCount: state.productCount + 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
