import {
  asyncThunkCreator,
  buildCreateSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../app/store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: unknown; // or your extra arg type e.g ThunkExtraArgument
}>();

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
