import React, { useState } from "react";
import "./Chord.css";
import Notes from "../../../Models/notes";

function Chord({ isStaff, isEnd, notes: notesProp }) {
  const [notes, setNotes] = useState(notesProp);

  return (
    <div className="Chord">
      {isStaff || isEnd ? <ul className='staff'>
        <li>{isStaff && 'e'}|</li>
        <li>{isStaff && 'B'}|</li>
        <li>{isStaff && 'G'}|</li>
        <li>{isStaff && 'D'}|</li>
        <li>{isStaff && 'A'}|</li>
        <li>{isStaff && 'E'}|</li>
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

