import { useState } from "react";

const initialGameBoard = [null, null, null, null, null, null, null, null, null];

export function GameBoard() {
  const [prevBoard, setPrevBoard] = useState(initialGameBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleClicked(index) {
    if (!prevBoard[index]) {
      const newClick = [...prevBoard];
      newClick[index] = currentPlayer;
      setPrevBoard(newClick);
      console.log(index);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }

  return (
    <>
      <div className="game-board">
        {prevBoard.map((item, itemIndex) => (
          <button key={itemIndex} className="click-button" onClick={() => handleClicked(itemIndex)}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
