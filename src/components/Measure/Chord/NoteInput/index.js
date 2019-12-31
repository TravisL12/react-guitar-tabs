import React, { useState, useEffect } from "react";
import { DASH } from "../../../../Models/chord";

function NoteInput({ name, notes, isActive }) {
  const [showInput, setShowInput] = useState(isActive);
  const [noteValue, setNoteValue] = useState(notes[name]);

  useEffect(() => {
    setNoteValue(notes[name]);
  }, [notes, name]);

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

NoteInput.defaultProps = {
  isActive: false
};

export default NoteInput;
