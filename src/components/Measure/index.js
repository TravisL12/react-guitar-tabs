import React, { useState } from "react";
import "./Measure.css";
import Chord from "./Chord";

const CHORD_COUNT = 80;

function Measure({ chordCount: chordCountProp }) {
  const [chordCount, setChordCount] = useState(chordCountProp || CHORD_COUNT)

  // Quick way to create an array of N items
  // https://stackoverflow.com/a/38213213
  const chords = Array.from({ length: chordCount }, (v, k) => <Chord key={k + 1} />)

  return (
    <div className="Measure">
      <Chord isStaff={true} />
      {chords}
      <Chord isEnd={true} />
    </div>
  );
}

export default Measure;
