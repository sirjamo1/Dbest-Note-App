import React from "react";
import "./Home.css"

export const Home = () => {
  //need to add welcome message/link to sign in page
  const user = sessionStorage.getItem("Auth Token")
  const isUserHere = user ? user : "not here"
  return (
    <div className="home-post-it-container">
      <h1>Welcome to Notes</h1>
      <div className="home-post-it-card">
        <h4>Please Login</h4>
        <p>welcome {isUserHere}</p>
      </div>
    </div>
  );
};
