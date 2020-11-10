import { combineReducers } from "redux";
import counterReducer from "./cartCount";
import Cart from "./cartProducts";

const rootReducer = combineReducers({
  counterReducer,
  Cart,
});

export default rootReducer;
