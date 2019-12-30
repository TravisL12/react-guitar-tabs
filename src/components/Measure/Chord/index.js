import React, { useState } from "react";
import "./Chord.css";
import ChordModel from "../../../Models/chord";
import NoteInput from "./NoteInput";
import ChordInput from "./ChordInput";

function Chord({ isStaff, isEnd, notes: notesProp }) {
  const [notes, setNotes] = useState(notesProp);

  return (
    <div className="Chord">
      {isStaff || isEnd ? (
        <ul>
          <li>{isStaff ? "Ch" : "\u00A0"}</li>
          <li>{isStaff && "e"}|</li>
          <li>{isStaff && "B"}|</li>
          <li>{isStaff && "G"}|</li>
          <li>{isStaff && "D"}|</li>
          <li>{isStaff && "A"}|</li>
          <li>{isStaff && "E"}|</li>
        </ul>
      ) : (
        <ul>
          <ChordInput setNotes={setNotes} />
          <NoteInput value={notes.display.highE} />
          <NoteInput value={notes.display.b} />
          <NoteInput value={notes.display.g} />
          <NoteInput value={notes.display.d} />
          <NoteInput value={notes.display.a} />
          <NoteInput value={notes.display.lowE} />
        </ul>
      )}
    </div>
  );
}

Chord.defaultProps = {
  isStaff: false,
  isEnd: false,
  notes: new ChordModel()
};

export default Chord;
