import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";
import userReducer from "../features/users/usersSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: userReducer,
  },
});

//infer the type of 'store'
export type AppStore = typeof store;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
