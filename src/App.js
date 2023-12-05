// import logo from "./logo.svg";
import "./App.css";
import { Welcomeh2, Welcomeh3 } from "./Welcome";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <Welcomeh2 children="Welcome h2" />
      <Welcomeh3 />
      <Welcomeh2>Saya adalah content</Welcomeh2>
      <Button>Click Me!</Button>
    </div>
  );
}

export default App;
