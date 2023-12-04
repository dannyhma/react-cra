// import logo from "./logo.svg";
import "./App.css";
import { Welcomeh2, Welcomeh3 } from "./Welcome";

function App() {
  return (
    <div className="App">
      <Welcomeh2 children="Welcome 1" />
      <Welcomeh3 />
      <Welcomeh2>Saya adalah content</Welcomeh2>
    </div>
  );
}

export default App;
