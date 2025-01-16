export function GameBoard({ gameBoard, onCellClick }) {
  return (
    <>
      <div className="game-board">
        {gameBoard.map((item, itemIndex) => (
          <button key={itemIndex} className="click-button" onClick={() => onCellClick(itemIndex)}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
