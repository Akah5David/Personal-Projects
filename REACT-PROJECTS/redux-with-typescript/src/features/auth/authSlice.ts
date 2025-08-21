import {
  createAsyncThunk,
  type PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

import type { RootState } from "../../app/store";
import { client } from "../../api/client";

interface AuthState {
  username: string | null;
}

const initialState: AuthState = {
  username: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (username: string) => {
    await client.post("/fakeApi/login", { username: username });
    return {
      username: username,
    };
  },
  {
    condition(arg, thunkApi) {
      const state = thunkApi.getState() as RootState;
      if (arg === null || state.auth.username) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const res = await client.post("/fakeApi/logout", {});
  return res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.username = "Loading...";
      })
      .addCase(login.fulfilled, (state, action) => {
        return {
          ...state,
          username: action.payload.username,
        };
      })
      .addCase(logout.pending, (state) => {
        state.username = "deleting";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.username = action.payload as null;
      });
  },
});

export const selectCurrentUserId = (state: RootState) => state.auth.username; //returns id of current user

export default authSlice.reducer;
