import logo from "./logo.svg";
import "./App.css";
import ParentComp from "./components/ParentComp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <ParentComp />
    </div>
  );
}

export default App;
