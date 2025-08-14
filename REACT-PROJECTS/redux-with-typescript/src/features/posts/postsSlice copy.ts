import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";

// import type { RootState } from "../../app/store";
import { client } from "../../api/client";
import { userLoggedOut } from "../auth/authSlice";
import { createAppAsyncThunk } from "../../app/withTypes";

export const fetchPosts = createAppAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const res = await client.get<Post[]>("/fakeApi/posts");

    //simulates network delay after fetching data
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return res.data;
  },
  {
    condition(arg, thunkApi) {
      const postsStatus = selectPostsStatus(thunkApi.getState());
      if (postsStatus !== "idle") {
        return false;
      }
    },
  }
);

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

interface PostState {
  posts: Post[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

//extracting the type of Post and choosing which fields of the post we want to be included in named type "PostUpdate"
type PostUpdate = Pick<Post, "id" | "title" | "content">;
type NewPost = Pick<Post, "title" | "content" | "user">;

//extracts all the keys of Reactions(creates a union of keys)
export type ReactionName = keyof Reactions;

const initialState: PostState = {
  posts: [],
  status: "idle",
  error: null,
};

export const addNewPost = createAppAsyncThunk("users/addNewPost", async () => {
  const res = await client.post<Post>("/fakeApi/posts", initialState);
  return res.data;
});


const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        // state.posts.push(action.payload); OR
        return {
          ...state,
          posts: state.posts.concat(action.payload),
        };
      },
      prepare: (title: string, content: string, userId: string) => {
        const id = nanoid();
        const date = new Date().toISOString();
        return {
          payload: {
            id: id,
            title,
            content,
            user: userId,
            date: date,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        };
      },
    },

    postUpdated: (state, action: PayloadAction<PostUpdate>) => {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },

    reactionAdded: (
      state,
      action: PayloadAction<{ postId: string; reaction: ReactionName }>
    ) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);

      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
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
  extraReducers: (builder) => {
    builder
      .addCase(userLoggedOut, () => {
        return initialState;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return {
          ...state,
          posts: action.payload,
          status: "succeeded",
        };
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        return {
          ...state,
          status: "failed",
          error: action.error.message ?? "Unknown error",
        };
      });
  },
});

// Export the auto-generated action creator with the same name
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

//exporting the selectors to be used in components
export const {
  selectPosts,
  selectPostById,
  selectPostsStatus,
  selectPostsError,
} = postsSlice.selectors;

//exporting generated reducer function
export default postsSlice.reducer;

//Alternative of preparing action object without using prepare function. useful for core redux
/*postUpdated: (state, action: PayloadAction<Post>) => {
  const { id, title, content } = action.payload;
  return state.map((post) => {
    if (post.id === id) {
      return { ...post, title, content };
    } else {
      return post;
    }
  });
},*/

//Creating a standalone selector that will be exported to be used in components that need access to global state. should be used for core redux or redux-toolkit below v2
/*export const selectPostById = (state: RootState, postId: string) => {
  return state.posts.find((post) => post.id === postId);
};

export const selectPosts = (state: RootState) => state.posts; */
