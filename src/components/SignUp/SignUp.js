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
        <label>Name*</label>
        <input
          onChange={(event) => {
            setNewName(event.target.value);
          }}
          type="text"
          placeholder="Name"
          pattern="[a-zA-Z]+"
          required
        ></input>
        <label>Email*</label>
        <input
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
          type="email"
          placeholder="Email"
          required
        ></input>
        <label>Password*</label>
        <input
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
          type="password"
          placeholder="password"
          pattern="[a-zA-Z]+"
          required
        ></input>
        <label>A little about yourself*</label>
        <textarea
          onChange={(event) => {
            setNewBio(event.target.value);
          }}
          placeholder="A little about yourself"
          required
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
