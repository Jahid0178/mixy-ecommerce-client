import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  cartProducts: [],
  productCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
        productCount: state.productCount + 1,
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (cartProducts) => cartProducts.id !== action.payload
        ),
        productCount: state.productCount - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
