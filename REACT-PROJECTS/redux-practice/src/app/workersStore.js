import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import workersReducer from "../features/Fetching-Image/fetchImageSlice";

const composeEnhnacers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
    })) ||
  compose;

const store = createStore(
  workersReducer,
  composeEnhnacers(applyMiddleware(thunk))
);

export default store;
