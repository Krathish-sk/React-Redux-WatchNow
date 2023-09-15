import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : [],
  likedMovies: localStorage.getItem("likedMovies")
    ? JSON.parse(localStorage.getItem("likedMovies"))
    : [],
  likedShows: localStorage.getItem("likedShows")
    ? JSON.parse(localStorage.getItem("likedShows"))
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
      localStorage.removeItem("userInfo");
    },
    userLikedMovies: (state, action) => {
      const likedMovie = action.payload;
      state.likedMovies = likedMovie;
      localStorage.setItem("likedMovies", JSON.stringify(state.likedMovies));
    },
    userLikedShows: (state, action) => {
      const likedShow = action.payload;
      state.likedShows = likedShow;
      localStorage.setItem("likedShows", JSON.stringify(state.likedShows));
    },
  },
});

export const { updateUser, logoutUser, userLikedMovies, userLikedShows } =
  userSlice.actions;
export default userSlice.reducer;
