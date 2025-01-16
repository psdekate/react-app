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

  function checkWinner(board) {
    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function handleClicked(index) {
    if (!prevBoard[index] && !winner) {
      const newClick = [...prevBoard];
      newClick[index] = currentPlayer;
      setPrevBoard(newClick);
      console.log(index, currentPlayer);

      const newWinner = checkWinner(newClick);
      if (newWinner) {
        setWinner(newWinner);
      } else {
        setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
      }
    }
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
          {winner && <h2>Winner is {winner}</h2>}
          <GameBoard onCellClick={handleClicked} gameBoard={prevBoard} />
        </div>
      </div>
    </>
  );
}

export default App;
