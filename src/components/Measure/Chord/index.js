import React, { useState } from "react";
import "./Chord.scss";
import ChordModel from "../../../Models/chord";
import NoteInput from "./NoteInput";
import ChordInput from "./ChordInput";

function Chord({ notes: notesProp }) {
  const [notes, setNotes] = useState(notesProp);

  return (
    <ul className="Chord">
      <ChordInput setNotes={setNotes} />
      <NoteInput name={"highE"} notes={notes.display} isActive={false} />
      <NoteInput name={"b"} notes={notes.display} isActive={false} />
      <NoteInput name={"g"} notes={notes.display} isActive={false} />
      <NoteInput name={"d"} notes={notes.display} isActive={false} />
      <NoteInput name={"a"} notes={notes.display} isActive={false} />
      <NoteInput name={"lowE"} notes={notes.display} isActive={false} />
    </ul>
  );
}

Chord.defaultProps = {
  isStaff: false,
  isEnd: false,
  notes: new ChordModel()
};

export default Chord;
