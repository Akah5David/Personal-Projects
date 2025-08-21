import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";
import userReducer from "../features/users/usersSlice";
import authReducer from "../features/auth/authSlice";
import notificationReducer from "../features/notification/notificationSlice";
import { listenerMiddleware, startAppListening } from "./listenerMIddleware";
import { addPostsListeners } from "../features/posts/postsSlice"; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: userReducer,
    notifications: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

addPostsListeners(startAppListening);

//infer the type of 'store'
export type AppStore = typeof store;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;

//Export a reusable type for handwritten thunks
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
