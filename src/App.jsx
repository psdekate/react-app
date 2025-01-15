import "./App.css";
import { Players } from "./components/Players";
import { GameBoard } from "./GameBoard";

function App() {
  return (
    <>
      <div className="container">
        <div className="game-wrapper">
          <h1>Tic-Tac-Toe</h1>
          <div className="game-header">
            <Players symbol="X" initialName="Player" />
            <Players symbol="0" initialName="Player" />
          </div>
          <GameBoard />
        </div>
      </div>
    </>
  );
}

export default App;
