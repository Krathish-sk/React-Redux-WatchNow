import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import Card from "./Card";
import "./LikedCards.scss";

export default function LikedCards({ likedMovies, likedShows }) {
  let renderedMovies = likedMovies?.map((movie) => (
    <Card key={movie.imdbID} data={movie} />
  ));

  let renderedShows = likedShows.map((show, index) => (
    <Card key={index} data={show} />
  ));

  return (
    <div className="movie-wrapping">
      <div className="movie-list">
        <h2>Movies</h2>
        {likedMovies?.length !== 0 ? (
          <Slider {...Settings}>{renderedMovies}</Slider>
        ) : (
          <div className="movies-error">
            <h3>No any liked movies</h3>
          </div>
        )}
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {likedShows.length !== 0 ? (
          <Slider {...Settings}>{renderedShows}</Slider>
        ) : (
          <div className="movies-error">
            <h3>No any liked shows</h3>
          </div>
        )}
      </div>
    </div>
  );
}
