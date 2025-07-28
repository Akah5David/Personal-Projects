import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/coreReduxToolkit";
// import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// import { combineReducers, createStore } from "redux";

// import counterReducer from "../features/checkBox/checkboxSlicer.js";

// const rootReducer = combineReducers({ counter: counterReducer });

// const store = createStore(rootReducer);

// export default store;
