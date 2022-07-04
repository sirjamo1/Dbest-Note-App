import { React, useState, useEffect } from "react";
import "./SignUp.css";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
//
//NOTE: ***********Form sends data even when fields are not met*******
//
export function SignUp() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newBio, setNewBio] = useState("");
  const usersCollectionRef = collection(db, "users");
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      email: newEmail,
      password: newPassword,
      bio: newBio,
    });
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(getUsers);
    };
    getUsers();
  }, []);
  return (
    <div className="signup--container">
      <h1>Sign Up</h1>
      <form>
        <label>
          Name<span className="asterisk">*</span>
          <span className="instructions">
            (Must only contain characters a - z)
          </span>
        </label>
        <input
          onChange={(event) => {
            setNewName(event.target.value);
          }}
          type="text"
          placeholder="Name"
          pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
          required
        ></input>
        <label>
          Email<span className="asterisk">*</span>
          <span className="instructions">(Must be a valid e-mail address)</span>
        </label>
        <input
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
          type="email"
          placeholder="Email"
          required
        ></input>
        <label>
          Password<span className="asterisk">*</span>
          <span className="instructions">
            (Minimum eight characters, at least one letter and one number)
          </span>
        </label>
        <input
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
          type="password"
          placeholder="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        ></input>
        <label>A little about yourself</label>
        <textarea
          onChange={(event) => {
            setNewBio(event.target.value);
          }}
          placeholder="A little about yourself"
          rows={7}
          cols={5}
          maxLength={50}
        />

        <button onClick={createUser} className="signup--submit">
          Sign Up
        </button>
      </form>
      {users.map((user) => {
        return (
          <div>
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>Bio: {user.bio}</p>
          </div>
        );
      })}
    </div>
  );
}
