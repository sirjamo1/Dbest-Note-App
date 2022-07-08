// import { React, useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../auth";
// import { db } from "../../firebase-config";
// import {
//     collection,
//     getDocs,
//     addDoc,
//     updateDoc,
//     doc,
//     deleteDoc,
// } from "firebase/firestore";
// import "./LogIn.css";

// export const LogIn = () => {
    
//     const [user, setUser] = useState("");
//     const [userPassword, setUserPassword] = useState("");

//     const [userData, setUserData] = useState();
//     const auth = useAuth();
//     const navigate = useNavigate();
//     const location = useLocation();
//     //<<<<<<<<<from firebase
//     const usersCollectionRef = collection(db, "users");
//     useEffect(() => {
//         const getUsers = async () => {
//             const data = await getDocs(usersCollectionRef);
//             setUserData(
//                 data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//             );
//              console.log(data[0])
//         };
//         getUsers();
//     }, [user]);
//     //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,

//     const redirectPath = location.state?.path || "/";
//     // console.log({userData});
//     // console.log({user});
//     // console.log({ userPassword });
//     const handleLogin = () => {
//         for (let i = 0; i < userData.length; i++) {
//             if (
//                 userData[i].name === user &&
//                 userData[i].password === userPassword
//             ) {
//                 auth.login(user);
//                 navigate(redirectPath, { replace: true });
//                 console.log(userData[i])
//             }
//         }
//     };
//     const handleToSignUpPage = () => {
//         navigate("/signup");
//     };
//     return (
//         <div className="log-in-post-it-container">
//             <h1>LogIn</h1>
//             <div className="log-in-card">
//                 <label>
//                     Full name: {""}
//                     <input
//                         type="text"
//                         onChange={(e) => setUser(e.target.value)}
//                     />
//                 </label>
//                 <label>
//                     Password: {""}
//                     <input
//                         type="text"
//                         onChange={(e) => setUserPassword(e.target.value)}
//                     />
//                 </label>
//                 <button onClick={handleLogin}>Login</button>
//                 <h3>Don't have an Account?</h3>
//                 <button onClick={handleToSignUpPage}>Sign up</button>
//             </div>
//         </div>
//     );
// };
