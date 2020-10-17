import React from 'react';
import './App.scss';
import Measure from '../Measure';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <header>Guitar Tabs Yo!</header>
        <div className="body">
          <Measure />
        </div>
      </div>
    </div>
  );
}

export default App;
