
import './App.css';
import "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1> Weather App </h1>
      <Weather />
      <footer> This project was coded by {" "} 
      <a href="SarahClarke.io" target="_blank">
        Sarah Clarke
      </a>{" "}
      and is {" "}
      <a href="https://github.com/ClarSar/react-weather-app-2.0.git" target="_blank">
        open sourced on github</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
