import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { userLoggedOut } from "../auth/authSlice";


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

//extracting the type of Post and choosing which fields of the post we want to be included in named type "PostUpdate"
type PostUpdate = Pick<Post, "id" | "title" | "content">;

//extracts all the keys of Reactions(creates a union of keys)
export type ReactionName = keyof Reactions;

const initialState: Post[] = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    user: "david",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: "2",
    title: "Second Post!",
    content: "More text!",
    user: "elias",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        return state.concat(action.payload);
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
      const existingPost = state.find((post) => post.id === id);

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
      const existingPost = state.find((post) => post.id === postId);

      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  selectors: {
    selectPosts: (state: Post[]) => {
      return state;
    },
    selectPostById: (state: Post[], postId: string) => {
      const post  = state.find((post) => post.id === postId)
      console.log(post);
      return post ;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoggedOut, () => {
      return [];
    });
  },
});

// Export the auto-generated action creator with the same name
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

//exporting the selectors to be used in components
export const { selectPosts, selectPostById } = postsSlice.selectors;

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
