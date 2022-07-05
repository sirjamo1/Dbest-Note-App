import Sidebar from "./Sidebar";
import Editor from "./Editor";
import { nanoid } from "nanoid";
import "./NoteFolderStyles.css";
import { useState, useEffect, React } from "react";
//<<<<<<<<<<<<<<<<<firebase zone>>>>>>>>>>>>>>>>>>>>>>
import { db } from "../../firebase-config"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export function Notes() {
const [userData, setUserData] = useState([]);
const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUserData = async () => {
      const data = await getDocs(usersCollectionRef);
      setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log({userData})
    };
    getUserData();
  }, []);

//**To Do List Here */
//*find firebase user.notes
//*make sure it's only the user that is logged in notes
//*save the notes from from screen to that user
//*update said notes
//*delete said notes
//
  //<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
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
}
