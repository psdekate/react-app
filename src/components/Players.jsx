import { useState } from "react";

export function Players({ symbol, initialName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing((prevState) => !prevState);
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  const nameEdit = (
    <input
      required
      type="text"
      className="name-input"
      onChange={handleNameChange}
      placeholder={playerName}
    />
  );

  return (
    <>
      <div className="player">
        {isEditing ? nameEdit : <h2>{playerName} :</h2>}
        <h3>{symbol}</h3>
        <button className="nameChanger" onClick={handleEditing}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
}
