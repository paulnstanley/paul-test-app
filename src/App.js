import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Paul's</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Test Site</h2>
        <h2>¯\_(ツ)_/¯ ¯\_(ツ)_/¯ ¯\_(ツ)_/¯</h2>
      </header>
      <body>
        <button id="testbutton1">¯\_(ツ)_/¯ Whoa</button>
        <p></p>
        <button id="testbutton2">¯\_(ツ)_/¯ No way</button>
        <p></p>
        <button id="testbutton3">¯\_(ツ)_/¯ So bad</button>
      </body>
    </div>
  );
}

export default App;
