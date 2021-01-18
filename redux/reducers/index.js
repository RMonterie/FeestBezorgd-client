import { combineReducers } from "redux";
import cart from "./cart";
import authentication from "./authenticate";
import modal from "./modal";

const rootReducer = combineReducers({
  cart,
  authentication,
  modal,
});

export default rootReducer;
