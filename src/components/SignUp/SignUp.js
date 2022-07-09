import { React, useState, useEffect } from "react";
import "./SignUp.css";
import { db } from "../../firebase-config";
import { useNavigate, useLocation } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";


      
//Need to change when user sign up they are taken back to login page
//
export function SignUp() {
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<NEW CODE
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const redirectPath = location.state?.path || "/";
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
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    };
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
           
          sessionStorage.setItem(
              "Auth Token",
              auth.currentUser.accessToken
          );
        
            navigate(redirectPath, { replace: true }); // redirects user back to where they clicked before (if login is true)
        } catch (error) {
            console.log(error.message);
        }
    };
    const logout = async () => {
        await signOut(auth);
        sessionStorage.removeItem("Auth Token");
        navigate("/"); //redirects user back to home page on logout
    };
    // console.log(sessionStorage)
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
                <h4>User Logged In:</h4>
                {user?.email}
                {/* {auth.currentUser.email} */}
                <button
                    onClick={logout}
                    className="signup--submit"
                    type="submit"
                >
                    Sign out
                </button>
            </div>
        </div>
    );
}

//,<<<<<<<<<<<<<OLD CODE>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//

//import {
//     collection,
//     getDocs,
//     addDoc,
//     updateDoc,
//     doc,
//     deleteDoc,
// } from "firebase/firestore";
//    //
// const [newName, setNewName] = useState("");
// const [newEmail, setNewEmail] = useState("");
// const [newPassword, setNewPassword] = useState("");
// const [newBio, setNewBio] = useState("");
// const usersCollectionRef = collection(db, "users");
// const createUser = async () => {
//     await addDoc(usersCollectionRef, {
//         name: newName,
//     placeholder="Name"
//     pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
//     required
// ></input> */
//                 }
// useEffect(() => {
//     const getUsers = async () => {
//         const data = await getDocs(usersCollectionRef);
//         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//         // console.log(getUsers);
//     };
//     getUsers();
// }, []);

//         email: newEmail,
//         password: newPassword,
//         bio: newBio,
//     });
// };
//             {
//                 /* {users.map((user) => {
//     return (
//       <div>
//         <p>Name: {user.name}</p>
//         <p>email: {user.email}</p>
//         <p>Bio: {user.bio}</p>
//       </div>
//     );
//   })} */
//             }

//     {
//         /* <label>A little about yourself</label>
// <textarea
//     onChange={(event) => {
//         setNewBio(event.target.value);
//     }}
//     placeholder="A little about yourself"
//     rows={7}
//     cols={5}
//     maxLength={50}
// /> */
//     }
//                 {
//                     /* <label>
//     Full Name<span className="asterisk">*</span>
//     <span className="instructions">
//         (Must only contain characters a - Z)
//     </span>
// </label>
// <input
//     onChange={(event) => {
//         setNewName(event.target.value);
//     }}
//     type="text"
