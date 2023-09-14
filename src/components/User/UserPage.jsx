import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUserEdit } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { updateUser } from "../../features/user/userSlice";
import "./UserPage.scss";
import User from "../../images/user.png";

export default function UserPage() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState(true);
  const [name, setName] = useState(userInfo.displayName);
  const [email, setEmail] = useState(userInfo.email);
  const [phone, setPhone] = useState(userInfo.phoneNumber);
  const [address, setAddress] = useState(
    userInfo.address ? userInfo.address : ""
  );

  function editSubmitHandler() {
    if (name && email && phone && address) {
      const userDetails = {
        displayName: name,
        phoneNumber: phone,
        email,
        address,
        photoURL: userInfo.photoURL,
      };
      dispatch(updateUser(userDetails));
      setEditUser((prev) => !prev);
    } else {
      alert("Please fill out all details");
    }
  }

  return (
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
  );
}
