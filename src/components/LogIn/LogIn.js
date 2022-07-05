import {React, useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import "./LogIn.css"

export const LogIn = () => {
  const [user, setUser] = useState("")
  // const [users, setUsers] = useState([]); // not sure about
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  //<<<<<<<<<from firebase
  // const usersCollectionRef = collection(db, "users");
  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const data = await getDocs(usersCollectionRef);
  //       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //       // console.log(getUsers);
  //     };
  //     getUsers();
  //   }, []);
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,

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
