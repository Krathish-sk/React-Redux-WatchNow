import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { MovieCard } from "../index";
import { Settings } from "../../common/settings";
import "./MovieListing.scss";

export default function MovieListing() {
  const { movies, shows, isMoviesLoading, isShowsLoading } = useSelector(
    (state) => state.movies
  );
  let renderedMovies =
    movies.Response === "True" &&
    movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />);

  let renderedShows =
    shows.Response === "True" &&
    shows.Search.map((show, index) => <MovieCard key={index} data={show} />);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {isMoviesLoading ? (
          <div className="movies-error">Loading...</div>
        ) : movies.Response === "True" ? (
          <Slider {...Settings}>{renderedMovies}</Slider>
        ) : (
          <div className="movies-error">
            <h3>Movies Not Found</h3>
          </div>
        )}
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {isShowsLoading ? (
          <div className="movies-error">Loading...</div>
        ) : shows.Response === "True" ? (
          <Slider {...Settings}>{renderedShows}</Slider>
        ) : (
          <div className="movies-error">
            <h3>Shows Not Found</h3>
          </div>
        )}
      </div>
    </div>
  );
}
