import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import type { RootState } from "../../app/store";

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
    postAdded: {
      reducer: (state, action) => {
        return state.concat(action.payload);
      },
      prepare: (title: string, content: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },

    postUpdated: (state, action: PayloadAction<Post>) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const selectPostById = (state: RootState, postId: string) => {
  return state.posts.find((post) => post.id === postId);
};

export const selectPosts = (state: RootState) => state.posts;

// Export the auto-generated action creator with the same name
export const { postAdded, postUpdated } = postsSlice.actions;

//exporting generated reducer function
export default postsSlice.reducer;

//Alternative

// postUpdated: (state, action: PayloadAction<Post>) => {
//   const { id, title, content } = action.payload;
//   return state.map((post) => {
//     if (post.id === id) {
//       return { ...post, title, content };
//     } else {
//       return post;
//     }
//   });
// },
