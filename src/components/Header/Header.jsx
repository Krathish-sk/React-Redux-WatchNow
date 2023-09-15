import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";
import logo from "../../images/Logo.png";
import User from "../../images/user.png";
import "./Header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { updateUser, logoutUser } from "../../features/user/userSlice";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  // Serach Submit
  function submitHandler(e) {
    e.preventDefault();
    if (search !== "") {
      dispatch(fetchAsyncMovies(search));
      dispatch(fetchAsyncShows(search));
      setSearch("");
    }
  }

  // Sign In User
  async function signInUser() {
    const { user } = await signInWithPopup(auth, provider);
    const { displayName, email, phoneNumber, photoURL, uid } = user;
    const userDetails = {
      displayName,
      email,
      phoneNumber,
      photoURL,
      uid,
    };
    dispatch(updateUser(userDetails));
  }

  // Sign Out User
  async function signOutUser() {
    await signOut(auth);
    dispatch(logoutUser());
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
      <div className="login-container">
        {openLogin && (
          <div className="open-login">
            {userInfo.length !== 0 ? (
              <div className="logedIn">
                <Link to="/userprofile">
                  <button>Profile</button>
                </Link>
                <button onClick={signOutUser}>Logout</button>
              </div>
            ) : (
              <div className="logedOut">
                <button onClick={signInUser}>Log-In</button>
              </div>
            )}
          </div>
        )}
        <div className="user-image">
          <img
            src={userInfo.length !== 0 ? userInfo.photoURL : User}
            alt="user"
            onClick={() => setOpenLogin((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}
