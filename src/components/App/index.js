import React from "react";
import "./App.css";
import Measure from "../Measure";

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <header>Guitar Tabs Yo!</header>
        <div className='body'>
          <Measure />
          <Measure chordCount={50} />
          <Measure chordCount={25} />
        </div>
      </div>
    </div>
  );
}

export default App;
