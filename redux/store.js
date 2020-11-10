import rootReducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

const makeStore = () => createStore(rootReducer);

export const wrapper = createWrapper(makeStore);
