import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
function App() {
  return (
    <div className="App">
      <Greet name="Jeffery" heroName="The Scorpion King" />
      <p> This is children props</p>
      <Greet name="Erica" heroName="Catwoman" />
      <button>Action</button>
      <Greet name="Gena" heroName="Sonya" />
      <Greet name="Clark" heroName="Superman" />
      <Welcome name="Jeffery" heroName="The Scorpion King"/>
      <Welcome name="Erica" heroName="Catwoman"/>
      <Welcome name="Gena" heroName="Sonya"/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
