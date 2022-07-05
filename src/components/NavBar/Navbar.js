import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import pencil from "../images/pencil.png";

export const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="primary--nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/contact">
        Contact
      </NavLink>
      <NavLink style={navLinkStyles} to="/notes">
        Notes
      </NavLink>
      <NavLink style={navLinkStyles} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          <div className="pencil--container">
            <img className="nav--pencil" src={pencil} alt="pencil"></img>
            <div className="signInUp">Log In</div>
          </div>
        </NavLink>
      )}
      {auth.user && (
        <NavLink style={navLinkStyles} to="/">
          <div onClick={handleLogout} className="pencil--container">
            <img className="nav--pencil" src={pencil} alt="pencil"></img>
            <div className="signInUp">Log out</div>
          </div>
        </NavLink>
      )}
    </nav>
  );
};
