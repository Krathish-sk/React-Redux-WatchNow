import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../images/Logo.png";
import user from "../../images/user.png";
import "./Header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

export default function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    if (search !== "") {
      dispatch(fetchAsyncMovies(search));
      dispatch(fetchAsyncShows(search));
      setSearch("");
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo-section">
          <img src={logo} alt="Logo" />
          <div className="logo">WatchNow</div>
        </div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search Movies or Shows"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
