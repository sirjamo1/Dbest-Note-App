import React from "react";
import Split from "react-split";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import { nanoid } from "nanoid";
export const Notes = () => {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );
  const [arrow, setArrow] = React.useState(true);
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    // console.log(JSON.stringify(notes[0].body));
    // console.log(notes[3].date);
  }, [notes]);
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your title here",

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
        // oldnote at position [i] doesn't match currently editing
        if (oldNotes[i].id === currentNoteId) {
          //unshift oldnote at position [i] (+plus changes) to the start
          newOldNotes.unshift({
            ...oldNotes[i],
            body: text,
            update: today.toLocaleString("en-US"),
          });
        } else {
          // if it doesn't  match return it at the same position [i]
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
  function changeArrow() {
    setArrow(!arrow);
    console.log({ arrow });
  }
  const splitSize = arrow ? 100 : 100000;

  return (
    <div>
      {notes.length > 0 ? (
        <Split sizes={[30, splitSize]} direction="horizontal" className="split">
          {
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
          }

          {currentNoteId && notes.length > 0 && (
            <Editor
              currentNote={findCurrentNote()}
              updateNote={updateNote}
              changeArrow={changeArrow}
              arrow={arrow}
            />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </div>
  );
};
