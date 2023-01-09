import {
  FETCH_START,
  LOAD_PRODUCT,
  SINGLE_PRODUCT,
} from "../actionTypes/actionTypes";

const initialState = {
  products: [],
  loading: false,
  error: null,
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        loading: true,
        error: null,
      };
    }
    case LOAD_PRODUCT: {
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    }
    case SINGLE_PRODUCT:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default productReducer;
