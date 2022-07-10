import { React, useState, useEffect } from "react";
import "./Login.css";
//import { db } from "../../firebase-config";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";
export function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/";
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );

            sessionStorage.setItem("Auth Token", auth.currentUser.accessToken);
            sessionStorage.setItem("uid", auth.currentUser.uid);
            sessionStorage.setItem("email", auth.currentUser.email);

            navigate(redirectPath, { replace: true }); 
        } catch (error) {
            console.log(error.message);
        }
    };
    // const logout = async () => {
    //     await signOut(auth);
    //     sessionStorage.removeItem("Auth Token");
    //     navigate("/");
    // };
    // function handleSignup() {
    //     navigate("signup", { replace: true });

    // }
    // console.log(sessionStorage)
    return (
        <div className="signup--container">
            <h1>Login</h1>
            <div className="signup-post-it">
                <label>
                    Email<span className="asterisk">*</span>
                    <span className="instructions">
                        (Must be a valid e-mail address)
                    </span>
                </label>
                <input
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                    type="email"
                    placeholder="Email"
                    required
                ></input>
                <label>
                    Password<span className="asterisk">*</span>
                    <span className="instructions">
                        (Minimum eight characters, at least one letter and one
                        number)
                    </span>
                </label>
                <input
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                    type="password"
                    placeholder="password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                    required
                ></input>
                <button
                    onClick={login}
                    className="signup--submit"
                    type="submit"
                >
                    Login
                </button>
                {/* <h4>User Logged In:</h4>
                {user?.email} */}
                {/* {auth.currentUser.email} */}
                {/* <button
                    onClick={logout}
                    className="signup--submit"
                    type="submit"
                >
                    Sign out
                </button> */}
                <h4>Don't have an account?<Link to="/signup"> Create one</Link></h4>
            </div>
        </div>
    );
}
