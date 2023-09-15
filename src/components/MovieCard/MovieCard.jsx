import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiTwotoneHeart } from "react-icons/ai";
import "./MovieCard.scss";

export default function MovieCard({ data }) {
  const { likedMovies, userInfo } = useSelector((state) => state.user);

  const likedMovie = likedMovies.filter(
    (movie) => movie.imdbID === data.imdbID
  );

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
              {userInfo.length !== 0 && likedMovie.length !== 0 && (
                <AiTwotoneHeart className="liked" />
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
