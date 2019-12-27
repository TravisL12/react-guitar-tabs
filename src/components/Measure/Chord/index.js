import React from "react";
import "./Chord.css";

function Chord({ isStaff, notes }) {
  return (
    <div className="Chord">
      {isStaff ? <ul>
        <li>e |</li>
        <li>b |</li>
        <li>g |</li>
        <li>d |</li>
        <li>a |</li>
        <li>E |</li>
      </ul> :
        <ul>
          <li>{notes.highE ? notes.highE : '-'}</li>
          <li>{notes.b ? notes.b : '-'}</li>
          <li>{notes.g ? notes.g : '-'}</li>
          <li>{notes.d ? notes.d : '-'}</li>
          <li>{notes.a ? notes.a : '-'}</li>
          <li>{notes.lowE ? notes.lowE : '-'}</li>
        </ul>
      }
    </div>
  );
}

Chord.defaultProps = {
  notes: {}
}

export default Chord;

