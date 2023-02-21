import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
  cart: cartReducer,
});

export default rootReducer;
