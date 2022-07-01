import React from 'react'
import { NavLink } from "react-router-dom"
import pencilSignIn from "./images/pencilSignIn.png"



export const Navbar = () => {
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
      <NavLink style={navLinkStyles} to="/signin">
        <img className="nav--pencil" src={pencilSignIn}></img>
      </NavLink>
    </nav>
  );
}
