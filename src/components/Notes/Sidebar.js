import React from "react";
import "./NoteFolderStyles.css";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  // console.log(props.notes[0].title);
  const noteElements = props.notes.map((note, index) => (
    <Link style={{ textDecoration: "none" }} to={note.title} key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <div className="text-snippet">
          {/* <h1 className="text-snippet">{note.title}</h1> */}
          <h1 className="text-snippet">{note.title.split("\n")[0]}</h1>
        </div>
        {/* <p className="text-snippet description">{note.description}</p> */}
        <p className="text-snippet description">
          {note.title.slice(`${note.title.split("\n")[0].length}`)
            ? note.title.slice(`${note.title.split("\n")[0].length}`, 150)
            : `No Content`}
        </p>
        <p className="text-snippet date--created">Created : {note.date}</p>
        <div className="delete--container">
          <p className="updated">
            {note.update !== "" ? `Updated : ${note.update}` : ""}
          </p>{" "}
          <button
            className="delete--btn"
            onClick={(event) => props.deleteNote(event, note.id)}
          >
            <i className="gg-trash trash-icon"></i>
          </button>
        </div>
      </div>
    </Link>
  ));
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
