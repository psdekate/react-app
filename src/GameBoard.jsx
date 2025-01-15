const initialGameBoard = [null, null, null, null, null, null, null, null, null];

export function GameBoard() {
  return (
    <>
      <div className="game-board">
        {initialGameBoard.map((item, itemIndex) => (
          <button key={itemIndex} className="click-button">
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
