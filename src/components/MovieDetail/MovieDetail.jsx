import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiTwotoneHeart } from "react-icons/ai";
import {
  fetchAsyncMovieOrShowDetail,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import { userLikedMovies, userLikedShows } from "../../features/user/userSlice";
import "./MovieDetail.scss";

export default function MovieDetail() {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const { selectedMovieOrShow: data } = useSelector((state) => state.movies);
  const { likedMovies, userInfo, likedShows } = useSelector(
    (state) => state.user
  );

  // Like or dislike a movie
  function handleLikeMovie() {
    // Check for login or not
    if (userInfo.length !== 0) {
      // Check the current movie is liked or not else remove the like
      if (likedMovie.length === 0) {
        const movies = [...likedMovies, data];
        dispatch(userLikedMovies(movies));
      } else {
        const movies = likedMovies.filter(
          (movie) => movie.imdbID !== data.imdbID
        );
        dispatch(userLikedMovies(movies));
      }
    } else {
      alert("Please Log-In to add Like");
    }
  }

  // Like or Dislike a show
  function handleLikeShow() {
    // Check for login or not
    if (userInfo.length !== 0) {
      // Check if the show is liked or not else remove the like
      if (likedShow.length === 0) {
        const shows = [...likedShows, data];
        dispatch(userLikedShows(shows));
      } else {
        const shows = likedShows.filter((show) => show.imdbID !== data.imdbID);
        dispatch(userLikedShows(shows));
      }
    } else {
      alert("Please Log-In to add Like");
    }
  }

  // Check for liked movie and liked show
  const likedMovie = likedMovies.filter(
    (movie) => movie.imdbID === data.imdbID
  );
  const likedShow = likedShows.filter((show) => show.imdbID === data.imdbID);

  // Handle Like for movie or show
  function handleLike() {
    if (data.Type === "movie") {
      handleLikeMovie();
    } else {
      handleLikeShow();
    }
  }

  // Get Individual movie/show details
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    }; // eslint-disable-next-line
  }, []);

  const classNameForLike =
    data.Type === "movie"
      ? likedMovie.length === 0
        ? "liked-false"
        : "liked"
      : likedShow.length === 0
      ? "liked-false"
      : "liked";

  return (
    <div className="main">
      <div className="back">
        <Link to="/">
          <IoMdArrowRoundBack className="back-button" />
        </Link>
      </div>
      <div className="movie-section">
        {Object.keys(data).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="section-left">
              <div className="title">
                <div className="movie-title">{data.Title}</div>
                <AiTwotoneHeart
                  className={classNameForLike}
                  onClick={handleLike}
                />
              </div>
              <div className="movie-rating">
                <span>
                  IMDB rating <i className="fa fa-star"></i> :{" "}
                  {data.imdbRating ? data.imdbRating : "--"}
                </span>
                <span>
                  IMDB votes <i className="fa fa-thumbs-up"></i> :{" "}
                  {data.imdbVotes ? data.imdbVotes : "--"}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i> :{" "}
                  {data.Runtime ? data.Runtime : "--"}
                </span>
                <span>
                  Year <i className="fa fa-calendar"></i> :{" "}
                  {data.Year ? data.Year : "--"}
                </span>
              </div>
              <div className="movie-plot">{data.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{data.Director ? data.Director : "--"}</span>
                </div>
                <div>
                  <span>Actors</span>
                  <span>{data.Actors ? data.Actors : "--"}</span>
                </div>
                <div>
                  <span>Generes</span>
                  <span>{data.Genere ? data.Genere : "--"}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{data.Language ? data.Language : "--"}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{data.Awards ? data.Awards : "--"}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={data.Poster} alt={data.Title} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
