import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

export default function MovieDetail() {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const { selectedMovieOrShow: data } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    }; // eslint-disable-next-line
  }, []);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
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
  );
}
