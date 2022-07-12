import { React } from "react";
import "./NoteFolderStyles.css";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
    // console.log(props.notes);
    const noteElements = props.notes.map((note, index) => (
        <Link style={{ textDecoration: "none" }} to={note.id} key={note.id}>
            <div
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <div className="text-snippet">
                    <h1 className="text-snippet">{note.title}</h1>
                </div>
                <p className="text-snippet description">
                    {note.description}
                    {/* NEED TO FIX THIS
                    description disappears when coming back to page  */}
                </p>
                <p className="text-snippet date--created">
                    Created : {note.date}
                </p>
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
                {/* <button className="new-note" onClick={props.saveNotes}>
                    S
                </button> */}
                {/* NOTE: saveNotes doesn't work */}
            </div>
            {noteElements}
        </section>
    );
}
