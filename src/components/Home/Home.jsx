import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { MovieListing } from "../index";

export default function Home() {
  const dispatch = useDispatch();
  const movieText = "Batman";
  const showText = "men";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
