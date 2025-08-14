import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { selectCurrentUsername } from "../auth/authSlice";
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
      return action.payload;
    });
  },
});

export default usersSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users;
export const selectUserById = (state: RootState, userId: string) => {
  return state.users.find((user) => user.id === userId);
};

export const selectCurrentUser = (state: RootState) => {
  const currentUserId = selectCurrentUsername(state);
  const currentUser = selectUserById(state, currentUserId!);
  console.log("Current User:", currentUserId);
  return currentUser;
};
