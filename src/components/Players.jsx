import { useState } from "react";

export function Players({ symbol, initialName, currentPlayer }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing((prevState) => !prevState);
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  const activePlayer = symbol === currentPlayer ? "player active" : "player";

  const nameEdit = (
    <input
      required
      type="text"
      className="name-input"
      onChange={handleNameChange}
      value={playerName}
    />
  );

  return (
    <>
      <div className={activePlayer}>
        {isEditing ? nameEdit : <h2>{playerName} :</h2>}
        <h3>{symbol}</h3>
        <button className="nameChanger" onClick={handleEditing}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
}
