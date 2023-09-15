import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiTwotoneHeart } from "react-icons/ai";
import "./MovieCard.scss";

export default function MovieCard({ data }) {
  const { likedMovies, likedShows, userInfo } = useSelector(
    (state) => state.user
  );

  const likedShow = likedShows.filter((show) => show.imdbID === data.imdbID);
  const likedMovie = likedMovies.filter(
    (movie) => movie.imdbID === data.imdbID
  );

  const classNameForLike =
    data.Type === "movie"
      ? likedMovie?.length !== 0
        ? "liked"
        : "liked-false"
      : likedShow?.length !== 0
      ? "liked"
      : "liked-false";

  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
              {userInfo.length !== 0 && (
                <AiTwotoneHeart className={classNameForLike} />
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
