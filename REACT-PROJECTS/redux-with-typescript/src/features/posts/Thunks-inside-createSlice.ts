import { type PayloadAction, nanoid } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// import type { RootState } from "../../app/store";
import { client } from "../../api/client";

import { createAppSlice } from "../../app/withTypes";

interface Reactions {
  thumbsUp: number;
  hooray: number;
  heart: number;
  rocket: number;
  eyes: number;
}

//defining the type or the shape of a Post
export interface Post {
  id: string;
  title: string;
  content: string;
  user: string;
  date: string;
  reactions: Reactions;
}

//extracts all the keys of Reactions(creates a union of keys)
export type ReactionName = keyof Reactions;

const initialReaction: Reactions = {
  thumbsUp: 0,
  hooray: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
};

interface PostState {
  posts: Post[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

//extracting the type of Post and choosing which fields of the post we want to be included in named type "PostUpdate"
type PostUpdate = Pick<Post, "id" | "title" | "content">;
// type NewPost = Pick<Post, "title" | "content" | "user">;

const initialState: PostState = {
  posts: [],
  status: "idle",
  error: null,
};

const postsSlice = createAppSlice({
  name: "posts",
  initialState,
  reducers: (create) => {
    return {
      postAdded: create.preparedReducer(
        (title: string, content: string, user: string) => {
          const id = nanoid();
          return {
            payload: {
              id,
              title: title,
              content: content,
              user,
              date: new Date().toISOString(),
              reactions: initialReaction,
            },
          };
        },
        (state, action: PayloadAction<Post>) => {
          state.posts.push(action.payload);
        }
      ),
      postUpdated: create.reducer<PostUpdate>((state, action) => {
        const { id, title, content } = action.payload;
        const existingPost = state.posts.find((post) => post.id === id);

        if (existingPost) {
          existingPost.title = title;
          existingPost.content = content;
        }

        return state;
      }),
      reactionAdded: create.reducer<{ postId: string; reaction: ReactionName }>(
        (state, action) => {
          const { postId, reaction } = action.payload;
          const existingPost = state.posts.find((post) => post.id === postId);

          if (existingPost) {
            existingPost.reactions[reaction]++;
          }
          return state;
        }
      ),
      fetchPosts: create.asyncThunk(
        // Payload creator function to fetch the data
        async () => {
          const res = await client.get<Post[]>("/fakeApi/posts");
          return res.data;
        },
        // Options for `createAsyncThunk`
        {
          options: {
            condition(arg, thunkApi) {
              const { posts } = thunkApi.getState() as RootState;
              if (posts.status !== "idle") {
                return false;
              }
            },
          },
          // The case reducers to handle the dispatched actions.
          // Each of these is optional, but must use these names.
          pending: (state, action) => {
            state.status = "pending";
          },
          fulfilled(state, action) {
            state.status = "succeeded";
            state.posts = action.payload;
          },
          rejected(state, action) {
            state.status = "failed";
            state.error = action.error.message ?? "Unknown error";
          },
        }
      ),
    };
  },
  selectors: {
    selectPosts: (state: PostState) => {
      return { ...state };
    },
    selectPostById: (state: PostState, postId: string) => {
      const post = state.posts.find((post) => post.id === postId);
      console.log(post);
      return post;
    },
    selectPostsStatus: (state: PostState) => {
      const postStatus = state.status;
      return postStatus;
    },
    selectPostsError: (state: PostState) => {
      const postsError = state.error;
      return postsError;
    },
  },
});

// Export the auto-generated action creator with the same name
export const { postUpdated, reactionAdded } = postsSlice.actions;

//exporting the selectors to be used in components
export const {
  selectPosts,
  selectPostById,
  selectPostsStatus,
  selectPostsError,
} = postsSlice.selectors;

//exporting generated reducer function
export default postsSlice.reducer;
