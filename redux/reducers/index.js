import { combineReducers } from "redux";
import cart from "./cart";
import authentication from "./authenticate";

const rootReducer = combineReducers({
  cart,
  authentication,
});

export default rootReducer;
