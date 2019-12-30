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
      <NoteInput value={notes.display.highE} />
      <NoteInput value={notes.display.b} />
      <NoteInput value={notes.display.g} />
      <NoteInput value={notes.display.d} />
      <NoteInput value={notes.display.a} />
      <NoteInput value={notes.display.lowE} />
    </ul>
  );
}

Chord.defaultProps = {
  isStaff: false,
  isEnd: false,
  notes: new ChordModel()
};

export default Chord;
