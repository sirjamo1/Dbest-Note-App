import React from "react";


export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        
        <div className="text-snippet">
          <h4 className="text-snippet">
            {note.body[0] ? note.body.split("\n")[0] : `No Title`}
          </h4>
        </div>
        <p className="text-snippet description">
          {note.body.slice(`${note.body.split("\n")[0].length}`)
            ? note.body.slice(`${note.body.split("\n")[0].length}`, 150)
            : `No Content`}
        </p>
        <p className="text-snippet date--created">Date Created : {note.date}</p>
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
    </div>
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
