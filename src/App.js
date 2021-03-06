import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Hello.</h1>
        </p>
        <p>
          I'm Jameson Brown, a software engineer in Atlanta, GA.
        </p>
        <a
            className="App-link"
            href="https://www.linkedin.com/in/jameson-brown-30701083/"
            target="_blank"
            rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
            className="App-link"
            href="mailto:jameson.brown@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
        >
          Email
        </a>
      </header>
    </div>
  );
}

export default App;
