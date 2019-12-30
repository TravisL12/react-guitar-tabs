import React, { useState } from "react";
import "./Chord.css";
import ChordModel from "../../../Models/chord";

function NoteInput({ value }) {
  const [showInput, setShowInput] = useState(false);
  const [noteValue, setNoteValue] = useState(value);

  return (
    <li className="noteInput">
      {showInput ? (
        <input
          onChange={event => setNoteValue(event.target.value)}
          onBlur={() => setShowInput(false)}
          type="text"
          value={noteValue === "-" ? "" : noteValue}
          maxLength="2"
          autoFocus
        />
      ) : (
          <span onClick={() => setShowInput(true)}>{noteValue}</span>
        )}
    </li>
  );
}

function Chord({ isStaff, isEnd, notes: notesProp }) {
  const [notes, setNotes] = useState(notesProp);

  return (
    <div className="Chord">
      {isStaff || isEnd ? (
        <ul>
          <li>{isStaff && "e"}|</li>
          <li>{isStaff && "B"}|</li>
          <li>{isStaff && "G"}|</li>
          <li>{isStaff && "D"}|</li>
          <li>{isStaff && "A"}|</li>
          <li>{isStaff && "E"}|</li>
        </ul>
      ) : (
          <ul>
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
