import "./App.css";
import { Players } from "./components/Players";

function App() {
  return (
    <>
      <div className="container">
        <div className="game-wrapper">
          <div className="game-header">
            <Players />
            <Players />
          </div>
          <div className="game-body">GB</div>
        </div>
      </div>
    </>
  );
}

export default App;
