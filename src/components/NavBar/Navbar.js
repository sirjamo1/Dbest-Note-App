import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import pencil from "../images/pencil.png";


export const Navbar = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    });
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth);
        navigate("/");
        sessionStorage.removeItem("Auth Token");
        sessionStorage.removeItem("uid");
        sessionStorage.removeItem("email");
    };
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
        };
    };
    console.log(user);
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
            {!user && (
                <NavLink style={navLinkStyles} to="/login">
                    <div className="pencil--container">
                        <img
                            className="nav--pencil"
                            src={pencil}
                            alt="pencil"
                        ></img>
                        <div className="signInUp">Log In</div>
                    </div>
                </NavLink>
            )}
            {user && (
                <NavLink style={navLinkStyles} to="/">
                    <div onClick={handleLogout} className="pencil--container">
                        <img
                            className="nav--pencil"
                            src={pencil}
                            alt="pencil"
                        ></img>
                        <div className="signInUp">Log out</div>
                    </div>
                </NavLink>
            )}
        </nav>
    );
};