import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Sidebar from "./components/Notes/Sidebar";
import Editor from "./components/Notes/Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";
import { Navbar } from "./components/NavBar/Navbar";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Notes } from "./components/Notes/Notes";
//import { NoteDetails } from "./components/NoteDetails"
import { NoMatch } from "./components/NoMatch";
import { SignIn } from "./components/SignIn/SignIn";

export default function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="notes" element={<Notes />}>
          <Route path=":note" element={<Notes />}/>
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </main>
  );
}
//
//
//
//
//
//
//
// <<<<<<<<<<<<<<<<<<<<<<OLD CODE BELOW***********************
//
//
//
  // const [notes, setNotes] = React.useState(
  //   () => JSON.parse(localStorage.getItem("notes")) || []
  // );
  // const [currentNoteId, setCurrentNoteId] = React.useState(
  //   (notes[0] && notes[0].id) || ""
  // );
  // React.useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes));
  //   //console.log(JSON.stringify(notes[0].body));
  // }, [notes]);
  // function createNewNote() {
  //   const newNote = {
  //     id: nanoid(),
  //     body: "# Type your title here",
  //   };

  //   setNotes((prevNotes) => [newNote, ...prevNotes]);
  //   setCurrentNoteId(newNote.id);
  // }

  // function updateNote(text) {
  //   setNotes((oldNotes) => {
  //     const newOldNotes = [];
  //     for (let i = 0; i < oldNotes.length; i++) {
  //       // oldnote at positiion [i] doesn't match cureently editing
  //       if (oldNotes[i].id == currentNoteId) {
  //         //unshift oldnote at positiion [i] (+plus chnages) to the start
  //         newOldNotes.unshift({ ...oldNotes[i], body: text });
  //       } else {
  //         // if it doesn't  match return it at the same position [i]
  //         newOldNotes.push(oldNotes[i]);
  //       }
  //     }
  //     return newOldNotes;
  //   });
  // }

  // function deleteNote(event, noteId) {
  //   event.stopPropagation();
  //   setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  // }

  // function findCurrentNote() {
  //   return (
  //     notes.find((note) => {
  //       return note.id === currentNoteId;
  //     }) || notes[0]
  //   );
  // }
  //
  //
  //
  //<<<<<<<<<<<<<<OLD SPLIT ROUTE NOW IN NOTES.JS BELOW*******************
  //
  //
  //
        {
          /* 
        {notes.length > 0 ? (
          <Split sizes={[30, 70]} direction="horizontal" className="split">
            <Route path="sidebar" element={<Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />} />
            {currentNoteId && notes.length > 0 && (
              <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
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
      */
        }