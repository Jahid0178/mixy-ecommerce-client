import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
});

export default rootReducer;
