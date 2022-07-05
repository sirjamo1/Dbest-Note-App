import {React, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import "./LogIn.css"

export const LogIn = () => {
  const [user, setUser] = useState("")
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || "/"

  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, { replace: true})
  }
  const handleToSignUpPage = () => {
    navigate("/signup")
  }
  return (
    <div className="log-in-post-it-container">
      <h1>LogIn</h1>
      <div className="log-in-card">
        <label>
          Username: {""}
          <input type="text" onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin} >Login</button>
        <h3>Don't have an Account?</h3>
        <button onClick={handleToSignUpPage}>Sign up</button>
      </div>
    </div>
  );
};
