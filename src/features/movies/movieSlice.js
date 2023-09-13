import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

// Get Movies
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const movies = await movieApi.get(`${APIKey}&s=${term}&type=movie`);
    return movies.data;
  }
);

// Get Shows
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const shows = await movieApi.get(`${APIKey}&s=${term}&type="series`);
    return shows.data;
  }
);

// Get Individual show/movie
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  isMoviesLoading: true,
  isShowsLoading: true,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      return { ...state, isMoviesLoading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload, isMoviesLoading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Fetching Failed");
    },
    [fetchAsyncShows.pending]: (state) => {
      return { ...state, isShowsLoading: true };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload, isShowsLoading: false };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
