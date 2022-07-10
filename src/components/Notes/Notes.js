import Sidebar from "./Sidebar";
import Editor from "./Editor";
import { nanoid } from "nanoid";
import "./NoteFolderStyles.css";
import { useState, useEffect, React } from "react";
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
    //query,
    // serverTimestamp
} from "firebase/firestore";

export function Notes() {
    const [notes, setNotes] = useState([]);
    const notesCollectionRef = collection(db, "notes");
    useEffect(() => {
        const getNotesData = async () => {
            const data = await getDocs(notesCollectionRef);
            setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getNotesData();
    }, []);

    const createNewNoteData = async () => {
        await addDoc(notesCollectionRef, {
            id: nanoid(),
            title: `Type your title here`,
            description: "No content",
            //date: serverTimestamp(), //this stalls browser (some error about nanoseconds)
            date: today.toLocaleString("en-US"),
            update: "",
        });
        const getNotesData = async () => {
            const data = await getDocs(notesCollectionRef);
            setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getNotesData();
        // setNotes((prevNotes) => [currentN, ...prevNotes]);
        //  setCurrentNoteId(newNote.id);
    };
    const deleteNote = async (event, id, noteId) => {
        // event.stopPropagation();
        const noteDoc = doc(db, "notes", id);
        await deleteDoc(noteDoc);
        const getNotesData = async () => {
            const data = await getDocs(notesCollectionRef);
            setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getNotesData();
    };

    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ""
    );
    let today = new Date();
    function updateNote(text) {
        setNotes((oldNotes) => {
            const newOldNotes = [];
            for (let i = 0; i < oldNotes.length; i++) {
                if (oldNotes[i].id === currentNoteId) {
                    newOldNotes.unshift({
                        ...oldNotes[i],
                        title: text,
                        // text: text, //not sure about this
                        description: text,
                        // update: serverTimestamp(),
                        update: today.toLocaleString("en-US"),
                    });
                } else {
                    newOldNotes.push(oldNotes[i]);
                }
            }
            return newOldNotes;
        });
    }
    //NOTE: this doesn't work

    const saveNotes = async (id, text) => {
        const noteDoc = doc(db, "notes", id);
        await updateDoc(noteDoc, notes);
        console.log(noteDoc);
    };
    console.log({ notes });
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
                            newNote={createNewNoteData}
                            deleteNote={deleteNote}
                            saveNotes={saveNotes}
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
                    <div
                        className="create-note-post-it-card"
                        onClick={createNewNoteData}
                    >
                        Create one now
                    </div>
                </div>
            )}
        </div>
    );
}
//
//
//<<<<<<<<<<<<<<<OLD CODE>>>>>>>>>>>>>>>>>>>>
//
//
//    // useEffect(() => {
//   localStorage.setItem("notes", JSON.stringify(notesData));
//   // console.log({localStorage})
// }, [notes]);

// function createNewNote() {
//   createNewNoteData()
//   const newNote = {
//     id: nanoid(),
//     title: `Type your title here`,
//     description: "No content",
//     date: today.toLocaleString("en-US"),
//     update: "",
//   };

//   setNotes((prevNotes) => [newNote, ...prevNotes]);
//   setCurrentNoteId(newNote.id);
// }
// function deleteNote(event, noteId) {
//   event.stopPropagation();
//   setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
// }
// const [notes, setNotes] = useState(
//   () => JSON.parse(localStorage.getItem("notesData")) || []
// );
