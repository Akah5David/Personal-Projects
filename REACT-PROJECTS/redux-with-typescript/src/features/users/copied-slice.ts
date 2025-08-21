import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { selectCurrentUserId } from "../auth/authSlice";
import { client } from "../../api/client";
import { createAppAsyncThunk } from "../../app/withTypes";

export interface User {
  id: string;
  name: string;
}

export const fetchUsers = createAppAsyncThunk("users/fetchUsers", async () => {
  const res = await client.get<User[]>("/fakeApi/users");
  return res.data;
});

const initialState: User[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default usersSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users;
export const selectUserById = (state: RootState, userId: string) => {
  const user = state.users.find((user) => user.id === userId);
  return user;
};

export const selectCurrentUser = (state: RootState) => {
  const loggedInUser = selectCurrentUserId(state);
  const currentUser = selectUserById(state, loggedInUser!);

  return currentUser;
};
