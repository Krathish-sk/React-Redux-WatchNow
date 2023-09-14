import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiTwotoneHeart } from "react-icons/ai";
import "./MovieCard.scss";

export default function MovieCard({ data }) {
  const { likedMovies } = useSelector((state) => state.user);

  const likedMovie = likedMovies.filter(
    (movie) => movie.imdbID === data.imdbID
  );
  console.log(
    "🚀 ~ file: MovieCard.jsx:15 ~ MovieCard ~ likedMovie:",
    likedMovie
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
              {likedMovie.length !== 0 && <AiTwotoneHeart className="liked" />}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
