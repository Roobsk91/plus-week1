import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1> What are you wondering? </h1>
      </header>
      <main>
        <Dictionary defaultWord="flower"/>
      </main>
      <footer className="App-footer">
        Coded by Ruby Smith and Open-Sourced
      </footer>
      </div>
     </div>
  );
}
