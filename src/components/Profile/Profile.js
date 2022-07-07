import React from "react";
import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";
import "./Profile.css";


export const Profile = () => {
  const authLog = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    authLog.logout()
    navigate('/')
  }
  return (
    <div className="profile-post-it-container">
      <h1>Welcome {auth.user}</h1>
      <div className="profile-card">
        <h4>profile page</h4>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
