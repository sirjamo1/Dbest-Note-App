import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    //need to add welcome message/link to sign in page
    const userEmail = sessionStorage.getItem("email");
    const linkStyle = {
        textDecoration: "none",
    };
    return (
        <div className="home-post-it-container">
            <h1>Welcome to Notes</h1>
            <div className="home-post-it-card">
                <h2>Welcome</h2>
                <h4>
                    {userEmail ? (
                        userEmail
                    ) : (
                        <Link style={linkStyle} to="/login">
                            {" "}
                            Please Login
                        </Link>
                    )}
                </h4>
            </div>
        </div>
    );
};
