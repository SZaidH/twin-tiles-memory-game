import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="container flex flex-col justify-center items-center text-center">
      <Header />
      <Game />
    </div>
  );
}

export default App;
