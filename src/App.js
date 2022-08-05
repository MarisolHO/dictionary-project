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
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Marisol HO</small>
        </footer>
      </div>
    </div>
  );
}
