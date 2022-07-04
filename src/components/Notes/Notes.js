import React from "react";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import { nanoid } from "nanoid";
import "./NoteFolderStyles.css";
import { useState } from "react";

export const Notes = () => {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    const currentNote = findCurrentNote();

    
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      title: `Type your title here`,
      
      description: "No content",
      date: today.toLocaleString("en-US"),
      update: "",
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  let today = new Date();
  function updateNote(text) {
    setNotes((oldNotes) => {
      const newOldNotes = [];
      for (let i = 0; i < oldNotes.length; i++) {
        if (oldNotes[i].id === currentNoteId) {
          newOldNotes.unshift({
            ...oldNotes[i],
            title: text,
            description: text,
            update: today.toLocaleString("en-US"),
          });
        } else {
          newOldNotes.push(oldNotes[i]);
        }
      }

      return newOldNotes;
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }
  const [pencilArrow, setPencilArrow] = useState(true);
  function changePencilArrow() {
    setPencilArrow(!pencilArrow);
  }

  return (
    <div>
      {notes.length > 0 ? (
        <div className="sidebar-editor--container">
          {pencilArrow ? (
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
          ) : (
            <></>
          )}

          <Editor
            currentNote={findCurrentNote()}
            updateNote={updateNote}
            changePencilArrow={changePencilArrow}
            pencilArrow={pencilArrow}
          />
        </div>
      ) : (
        <div className="create-note-container">
          <h1>You have no notes</h1>
          <div className="create-note-post-it-card" onClick={createNewNote}>
            Create one now
          </div>
        </div>
      )}
    </div>
  );
};
