import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,
  },
});
