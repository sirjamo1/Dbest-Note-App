import React from "react";
import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";
import "./Profile.css";


export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  // const handleLogout = () => {
  //   auth.logout()
  //   navigate('/')
  // }
  return (
    <div className="profile-post-it-container">
      <h1>Welcome {}</h1>
      <div className="profile-card">
        <h4>profile page</h4>
        {/* <button >Logout</button> */}
      </div>
    </div>
  );
};
