import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <Weather defaultCity="Utah" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/ChaneaHamilton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chanea Hamilton
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ChaneaHamilton/react-weather-project-week5-chanea"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://chanea-weather-react-project.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
