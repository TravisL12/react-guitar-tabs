import React, { useState } from "react";
import ChordModel, { DASH } from "../../../../Models/chord";
import chordLibrary from "../../../../chordLibrary";

function ChordInput({ setNotes }) {
  const [showInput, setShowInput] = useState(false);
  const [chordValue, setChordValue] = useState("");

  const lookupChords = event => {
    const { value } = event.target;

    const noteObj = new ChordModel();
    const matchChord = chordLibrary[value.toLowerCase()];
    if (matchChord) {
      noteObj.setNotes(matchChord.notes);
      setChordValue(matchChord.name);
    } else {
      setChordValue(value);
    }

    setNotes(noteObj);
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

export default ChordInput;
