import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, addPost, addComment, addLike } from "./postsOperations";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
      })
      .addCase(addPost.fulfilled, (state, { payload }) => {
        state.posts.push(payload);
      })
      .addCase(addComment.fulfilled, (state, { payload }) => {
        const postIndex = state.posts.findIndex(
          (post) => post.id === payload.postId
        );
        state.posts[postIndex].comments.push(payload.comment);
      })
      .addCase(addLike.fulfilled, (state, { payload }) => {
        const postIndex = state.posts.findIndex((post) => post.id === payload);
        state.posts[postIndex].likesCount += 1;
      }),
});

export const postsReducer = postsSlice.reducer;