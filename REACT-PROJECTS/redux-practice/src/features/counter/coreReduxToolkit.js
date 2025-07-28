import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

console.log("increment", increment);
console.log("decrement", decrement);

const initialsState = 0;

const counterReducer = createReducer(initialsState, (builder) => {
  builder
    .addCase(increment, (state) => state + 1)
    .addCase(decrement, (state) => state - 1);
});

export default counterReducer;

export const actions = { increment, decrement };
