import React, { useState, useEffect } from "react";
import { DASH } from "../../../../Models/chord";

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

export default NoteInput;
