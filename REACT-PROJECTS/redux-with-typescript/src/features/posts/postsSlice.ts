import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//defining the type or the shap of a Post
export interface Post {
  id: string;
  title: string;
  content: string;
}

const initialState: Post[] = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
  },
  {
    id: "2",
    title: "Second Post!",
    content: "More text!",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded: (state, action: PayloadAction<Post>) => {
      return state.concat(action.payload);
    },
  },
});

// Export the auto-generated action creator with the same name
export const { postAdded } = postsSlice.actions;

//exporting generated reducer function
export default postsSlice.reducer;
