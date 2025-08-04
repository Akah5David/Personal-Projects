// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/coreReduxToolkit";
// // import counterReducer from "../features/counter/counterSlice";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import { thunk } from "redux-thunk";

import counterReducer from "../features/checkBox/checkboxSlicer.js";

const rootReducer = combineReducers({ counter: counterReducer });
const coreEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, coreEnhancer);

export default store;
