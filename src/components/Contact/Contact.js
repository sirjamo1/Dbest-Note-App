import React, { useEffect, useState } from "react";
import "./Contact.css";
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
export function Contact() {
  const [contact, setContact] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const contactCollectionRef = collection(db, "contact");
  const createMessage = async () => {
    await addDoc(contactCollectionRef, {
      name: newName,
      email: newEmail,
      title: newTitle,
      message: newMessage,
    });
  };
  useEffect(() => {
    const getContact = async () => {
      const data = await getDocs(contactCollectionRef);
      setContact(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getContact();
  }, []);
  return (
    <div className="contact--container">
      <div>
        <h1>Contact Us</h1>
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
            pattern="[a-zA-Z]+"
            required
          ></input>
          <label>
            Email<span className="asterisk">*</span>
            <span className="instructions">
              (Must be a valid e-mail address)
            </span>
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
            Title<span className="asterisk">*</span>
          </label>
          <input
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
            type="text"
            placeholder="Title"
            required
          ></input>
          <label>
            Your Message<span className="asterisk">*</span>
          </label>
          <textarea
            onChange={(event) => {
              setNewMessage(event.target.value);
            }}
            placeholder="Type your message here..."
            required
            rows={7}
            cols={5}
            maxLength={50}
          />

          <button
            onClick={createMessage}
            className="contact--submit"
            type="submit"
          >
            Send
          </button>
        </form>
        {contact.map((con) => {
          return (
            <div>
              <p>Name: {con.name}</p>
              <p>email: {con.email}</p>
              <p>message: {con.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
