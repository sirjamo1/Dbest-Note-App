import React from "react";
import "./Contact.css"

export const Contact = () => {
  return (
    <div className="contact--container">
      <h1>Contact Us</h1>
      <form>
        <label>Name*</label>
        <input
          type="text"
          defaultValue=""
          placeholder="Name"
          pattern="[a-zA-Z]+"
          required
        ></input>
        <label>Email*</label>
        <input
          type="email"
          defaultValue=""
          placeholder="Email"
          required
        ></input>
        <label>Title*</label>
        <input type="text" defaultValue="" placeholder="Title" required></input>
        <label>Your Message*</label>
        <textarea
          defaultValue=""
          placeholder="Type your message here..."
          required
          rows={7}
          cols={5}
          maxLength={50}
        />

        <input className="contact--submit" type="submit" />
      </form>
    </div>
  );
};
