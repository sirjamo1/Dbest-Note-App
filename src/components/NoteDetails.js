import React from "react";
import { useParams } from "react-router-dom";

export const NoteDetails = () => {
  const params = useParams(); // const { userId } = useParams() <<<same in one line
  const noteId = params.noteId;
  return <div>Details about user {userId}</div>;
};



//*******************NOT SURE ABOUT THIS**************************************