import React from 'react';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Galway" />
      <footer> This project was coded by {" "} 
      <a href="SarahClarke.io" target="_blank" rel="noopener noreferrer">
        Sarah Clarke
      </a>{" "}
      and is {" "}
      <a href="https://github.com/ClarSar/react-weather-app-2.0.git" target="_blank" rel="noopener noreferrer">
        Open Sourced on Github</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
