import React, { useState, useEffect } from "react";
import "./Chord.css";
import ChordModel, { DASH } from "../../../Models/chord";
import chordLibrary from "../../../chordLibrary";

function ChordInput({ setNotes }) {
  const [showInput, setShowInput] = useState(false);
  const [chordValue, setChordValue] = useState("");

  const lookupChords = event => {
    const { value } = event.target;

    const noteObj = new ChordModel();
    if (chordLibrary[value]) {
      noteObj.setNotes(chordLibrary[value]);
    }
    setNotes(noteObj);

    setChordValue(event.target.value);
  };

  return (
    <li className="noteInput">
      {showInput ? (
        <input
          onChange={lookupChords}
          onBlur={() => setShowInput(false)}
          type="text"
          value={chordValue === DASH ? "" : chordValue}
          maxLength="8"
          autoFocus
        />
      ) : (
          <span onClick={() => setShowInput(true)}>{chordValue}</span>
        )}
    </li>
  );
}

function NoteInput({ value }) {
  const [showInput, setShowInput] = useState(false);
  const [noteValue, setNoteValue] = useState(value);

  useEffect(() => {
    setNoteValue(value);
  }, [value]);

  return (
    <li className="noteInput">
      {showInput ? (
        <input
          onChange={event => setNoteValue(event.target.value)}
          onBlur={() => setShowInput(false)}
          type="text"
          value={noteValue === DASH ? "" : noteValue}
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
