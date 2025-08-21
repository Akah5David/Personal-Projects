import {
  createEntityAdapter,
  type EntityState,
  createSlice,
  type PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
import { client } from "../../api/client";
import { logout } from "../auth/authSlice";
import { type AppStartListening } from "../../app/listenerMIddleware";
import { createAppAsyncThunk } from "../../app/withTypes";
import type { RootState } from "../../app/store";
import { ACTIONS } from "react-tiny-toast";

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

interface PostState extends EntityState<Post, string> {
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const postAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState: PostState = postAdapter.getInitialState({
  status: "idle",
  error: null,
});

//extracting the type of Post and choosing which fields of the post we want to be included in named type "PostUpdate"
type PostUpdate = Pick<Post, "id" | "title" | "content">;
type NewPost = Pick<Post, "title" | "content" | "user">;

//extracts all the keys of Reactions(creates a union of keys)
export type ReactionName = keyof Reactions;

export const addNewPost = createAppAsyncThunk(
  "users/addNewPost",
  async (initialPost: NewPost) => {
    const res = await client.post<Post>("/fakeApi/posts", initialPost);
    return res.data;
  }
);

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

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postUpdated: (state, action: PayloadAction<PostUpdate>) => {
      const { id, title, content } = action.payload;
      postAdapter.updateOne(state, { id, changes: { title, content } });
    },

    reactionAdded: (
      state,
      action: PayloadAction<{ postId: string; reaction: ReactionName }>
    ) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.entities[postId];

      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        postAdapter.setAll(state, action.payload);
      })
      .addCase(addNewPost.fulfilled, postAdapter.addOne);
  },
});

// Export the auto-generated action creator with the same name
export const { postUpdated, reactionAdded } = postsSlice.actions;

//exporting customized adapter-based selectors
export const {
  selectAll: selectPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,

  //pass in a selector that returns the posts slice state
} = postAdapter.getSelectors((state: RootState) => state.posts);

//Manual Selectors
export const selectPostsStatus = (state: RootState) => {
  const postStatus = state.posts.status;
  return postStatus;
};

export const selectPostsError = (state: RootState) => {
  const postsError = state.posts.error;
  return postsError;
};

export const selectPostsByUser = createSelector(
  //pass in one or more "input selectors"
  [
    // reads something from the root `state` and returns it
    selectPosts,

    //function that extracts one of the arguments and passes that onward
    (state: RootState, userId: string) => userId,
  ], //the output function gets those values as its arguments,

  // and will run when either input value changes
  (posts, userId) => posts.filter((post) => post.user === userId)
);

export const addPostsListeners = (startAppListening: AppStartListening) => {
  startAppListening({
    actionCreator: addNewPost.fulfilled,
    effect: async (action, listenerApi) => {
      const {toast} =  await import ('react-tiny-toast')
        const toastId = toast.show('New post added!', {
          variant: 'success',
          position: "bottom-right",
          pause: true
        })
      
        await listenerApi.delay(5000)
        toast.remove(toastId)
    }
  });
};

//exporting generated reducer function
export default postsSlice.reducer;
