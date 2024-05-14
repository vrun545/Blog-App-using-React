import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '0',
    title: 'What is DSA?',
    content: "DSA stands for Data Structures and Algorithms. It is a fundamental concept in computer science that focuses on organizing and manipulating data efficiently.",
    reactions: {
      thumbsUp: 0
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(), title, content, userId, reactions: { thumbsUp: 0 },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const post = state.find((post) => post.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
    postDeleted(state, action) {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);

export const { postAdded, postDeleted, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
