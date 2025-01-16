import "./App.css";
import { Players } from "./components/Players";
import { GameBoard } from "./GameBoard";
import { useState } from "react";
import { winningCombinations } from "./win";

const initialGameBoard = [null, null, null, null, null, null, null, null, null];

function App() {
  const [prevBoard, setPrevBoard] = useState(initialGameBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  function checkWinner(updatedBoard) {
    for (const [a, b, c] of winningCombinations) {
      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        return updatedBoard[a];
      }
    }
    return null;
  }

  function handleClicked(index) {
    if (!prevBoard[index] && !winner) {
      const updatedBoard = [...prevBoard];
      updatedBoard[index] = currentPlayer;
      setPrevBoard(updatedBoard);
      console.log(index, currentPlayer);

      const newWinner = checkWinner(updatedBoard);
      if (newWinner) {
        setWinner(newWinner);
      } else {
        setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
      }
    }
  }

  function resetGame() {
    setPrevBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  }

  return (
    <>
      <div className="container">
        <div className="game-wrapper">
          <h1>Tic-Tac-Toe</h1>
          <div className="game-header">
            <Players symbol="X" initialName="Player" currentPlayer={currentPlayer} />
            <Players symbol="O" initialName="Player" currentPlayer={currentPlayer} />
          </div>
          {winner ? (
            <div className="final-result">
              <h2>Winner is {winner}</h2>
              <button className="reset-button" onClick={resetGame}>
                Reset
              </button>
            </div>
          ) : prevBoard.every((cell) => cell !== null) ? (
            <div className="final-result">
              <h2>Its a draw</h2>
              <button className="reset-button" onClick={resetGame}>
                Reset
              </button>
            </div>
          ) : null}
          <GameBoard onCellClick={handleClicked} gameBoard={prevBoard} />
        </div>
      </div>
    </>
  );
}

export default App;
