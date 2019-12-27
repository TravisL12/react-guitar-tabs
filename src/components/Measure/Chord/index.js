import React, { useState } from "react";
import "./Chord.css";
import Notes from "../../../Models/notes";

function Chord({ isStaff, notes: notesProp }) {
  const [notes, setNotes] = useState(notesProp);

  return (
    <div className="Chord">
      {isStaff ? <ul>
        <li>e|</li>
        <li>b|</li>
        <li>g|</li>
        <li>d|</li>
        <li>a|</li>
        <li>E|</li>
      </ul> :
        <ul>
          <li>{notes.display.highE}</li>
          <li>{notes.display.b}</li>
          <li>{notes.display.g}</li>
          <li>{notes.display.d}</li>
          <li>{notes.display.a}</li>
          <li>{notes.display.lowE}</li>
        </ul>
      }
    </div>
  );
}

Chord.defaultProps = {
  notes: new Notes(),
}

export default Chord;

