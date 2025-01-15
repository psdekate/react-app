import { useState } from "react";

export function Players() {
  const [player, setPlayer] = useState("Player");

  function handleInput() {
    const setName = <input type="text" />;
  }

  return (
    <>
      <div className="player">
        <h2>{player}</h2>
        <button className="nameChanger" onClick={handleInput}>
          Edit
        </button>
      </div>
    </>
  );
}
