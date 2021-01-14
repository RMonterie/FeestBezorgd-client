import rootReducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

const makeStore = ({ isServer }) => {
  //If it's on the server make a redux store
  if (isServer) {
    return createStore(rootReducer);
  } else {
    //If it's on the client make a persisted redux store
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["cart", "authentication"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(persistedReducer);

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
