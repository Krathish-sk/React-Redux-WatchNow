import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaUserEdit } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { updateUser } from "../../features/user/userSlice";
import User from "../../images/user.png";
import LikedCards from "./LikedCards";
import "./UserPage.scss";

export default function UserPage() {
  const { userInfo, likedMovies, likedShows } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState(false);
  const [name, setName] = useState(userInfo.displayName);
  const [email, setEmail] = useState(userInfo.email);
  const [phone, setPhone] = useState(userInfo.phoneNumber);
  const [address, setAddress] = useState(
    userInfo.address ? userInfo.address : ""
  );

  // Edit Submit
  function editSubmitHandler() {
    if (name && email && phone && address) {
      const userDetails = {
        displayName: name,
        phoneNumber: phone,
        email,
        address,
        photoURL: userInfo.photoURL,
        uid: userInfo.uid,
      };
      dispatch(updateUser(userDetails));
      setEditUser((prev) => !prev);
    } else {
      alert("Please fill out all details");
    }
  }

  return (
    <div className="user-page">
      <div className="main">
        <div className="back">
          <Link to="/">
            <IoMdArrowRoundBack className="back-button" />
          </Link>
        </div>
        <div className="user">
          <div className="main-container">
            <div className="left-container">
              <div className="image-section">
                <img
                  src={userInfo.photoURL ? userInfo.photoURL : User}
                  alt={userInfo.displayName}
                />
              </div>
              <div className="title-section">
                {editUser ? (
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <h2>{userInfo.displayName}</h2>
                )}
              </div>
            </div>
            <div className="right-container">
              <div className="right-heading">
                <h3>User Details</h3>
              </div>
              <div className="right-info">
                <div className="info">
                  <h3>Email</h3>
                  {editUser ? (
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <p>{userInfo.email}</p>
                  )}
                </div>
                <div className="info">
                  <h3>Phone Number</h3>
                  {editUser ? (
                    <input
                      type="number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  ) : (
                    <p>{userInfo.phoneNumber ? userInfo.phoneNumber : "--"}</p>
                  )}
                </div>
                <div className="info">
                  <h3>Address</h3>
                  {editUser ? (
                    <textarea
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  ) : (
                    <p>{userInfo.address ? userInfo.address : "--"}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="edit-profile">
            <FaUserEdit onClick={() => setEditUser((prev) => !prev)} />
            {editUser && <MdDoneOutline onClick={editSubmitHandler} />}
          </div>
        </div>
      </div>
      {userInfo.length !== 0 ? (
        <div className="like-section">
          <h1>Liked Movies and Shows</h1>
          {likedMovies.length !== 0 || likedShows.length !== 0 ? (
            <LikedCards likedMovies={likedMovies} likedShows={likedShows} />
          ) : (
            <div className="no-items">No Items to show</div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
