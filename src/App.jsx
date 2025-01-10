import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleAddition() {
    setCount(count + 1);
  }

  function handleRemove() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="container">
        <div className="counter-wrapper">
          <button className="action" onClick={handleAddition}>
            add
          </button>
          <div>
            <p className="count">{count}</p>
          </div>
          <button className="action" onClick={handleRemove}>
            remove
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
