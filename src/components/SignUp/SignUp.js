import { React, useState } from "react";
import "./SignUp.css";
//import { db } from "../../firebase-config";
import { useNavigate, useLocation } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
   // signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
export function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate(); 
    const location = useLocation(); 
    //const redirectPath = location.state?.path || "/";
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            sessionStorage.setItem("Auth Token", auth.currentUser.accessToken);
            sessionStorage.setItem("uid", auth.currentUser.uid);
            sessionStorage.setItem("email", auth.currentUser.email);
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="signup--container">
            <h1>Sign Up</h1>
            <div className="signup-post-it">
                <label>
                    Email<span className="asterisk">*</span>
                    <span className="instructions">
                        (Must be a valid e-mail address)
                    </span>
                </label>
                <input
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
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
                        setRegisterPassword(event.target.value);
                    }}
                    type="password"
                    placeholder="password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                    required
                ></input>

                <button
                    onClick={register}
                    className="signup--submit"
                    type="submit"
                >
                    Sign Up
                </button>
                {/* <h4>User Logged In:</h4>
                {user?.email} */}
                {/* {auth.currentUser.email} */}
                {/* <button
                    // onClick={logout}
                    className="signup--submit"
                    type="submit"
                >
                    Sign out
                </button> */}
            </div>
        </div>
    );
}
