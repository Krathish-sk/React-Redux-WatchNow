import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : [],
  likedMovies: localStorage.getItem("likedMovies")
    ? JSON.parse(localStorage.getItem("likedMovies"))
    : [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
    userLikedMovies: (state, action) => {
      const likedMovie = action.payload;
      state.likedMovies = likedMovie;
      localStorage.setItem("likedMovies", JSON.stringify(state.likedMovies));
    },
  },
});

export const { updateUser, logoutUser, userLikedMovies } = userSlice.actions;
export default userSlice.reducer;
