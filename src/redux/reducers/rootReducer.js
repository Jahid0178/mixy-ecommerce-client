import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
  user: userReducer,
});

export default rootReducer;
