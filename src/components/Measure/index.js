import React, { useMemo, useState } from "react";
import "./Measure.scss";
import Chord from "./Chord";

const CHORD_COUNT = 80;

function Measure({ chordCount: chordCountProp }) {
  const [chordCount, setChordCount] = useState(chordCountProp || CHORD_COUNT);

  // Quick way to create an array of N items
  // https://stackoverflow.com/a/38213213
  const chords = useMemo(
    () => Array.from({ length: chordCount }, (v, k) => <Chord key={k + 1} />),
    [chordCount]
  );

  return (
    <div className="Measure">
      <ul>
        <li>Ch</li>
        <li>e|</li>
        <li>B|</li>
        <li>G|</li>
        <li>D|</li>
        <li>A|</li>
        <li>E|</li>
      </ul>
      {chords}
      <ul>
        <li>&nbsp;</li>
        <li>|</li>
        <li>|</li>
        <li>|</li>
        <li>|</li>
        <li>|</li>
        <li>|</li>
      </ul>
    </div>
  );
}

export default Measure;
