// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/coreReduxToolkit";
// // import counterReducer from "../features/counter/counterSlice";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import { combineReducers, applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

import counterReducer from "../features/checkBox/checkboxSlicer.js";

const rootReducer = combineReducers({ counter: counterReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
