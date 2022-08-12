import shecodeslogo from "./shecodeslogo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={shecodeslogo}
            className="App-logo img-fluid"
            alt="shecodeslogo"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Marisol HO and is{" "}
            <a
              href="https://github.com/MarisolHO/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            {""}
            and{" "}
            <a
              href="https://thriving-longma-626bf6.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
