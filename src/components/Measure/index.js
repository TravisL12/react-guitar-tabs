import React from "react";
import "./Measure.css";
import Chord from "./Chord";

const CHORD_COUNT = 60;

function Measure({ chordCount }) {
  // Quick way to create an array of N items
  // https://stackoverflow.com/a/38213213
  const chords = Array.from({ length: chordCount || CHORD_COUNT }, (v, k) => <Chord key={k + 1} />)

  return (
    <div className="Measure">
      <Chord isStaff={true} />
      {chords}
    </div>
  );
}

export default Measure;
