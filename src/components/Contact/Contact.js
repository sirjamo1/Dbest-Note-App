import React from "react";
import "./Contact.css"

export const Contact = () => {
  return (
    <div className="contact--container">
      <h1>Contact Us</h1>
      <form>
        <label>
          Name<span className="asterisk">*</span>
          <span className="instructions">
            (Must only contain characters a - z)
          </span>
        </label>
        <input
          // onChange={(event) => {
          //   setNewName(event.target.value);
          // }}
          type="text"
          placeholder="Name"
          pattern="[a-zA-Z]+"
          required
        ></input>
        <label>
          Email<span className="asterisk">*</span>
          <span className="instructions">(Must be a valid e-mail address)</span>
        </label>
        <input
          // onChange={(event) => {
          //   setNewEmail(event.target.value);
          // }}
          type="email"
          placeholder="Email"
          required
        ></input>
        <label>
          Title<span className="asterisk">*</span>
        </label>
        <input type="text" placeholder="Title" required></input>
        <label>
          Your Message<span className="asterisk">*</span>
        </label>
        <textarea
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
