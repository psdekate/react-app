import "./App.css";
import { votes } from "./data3";
import { useState } from "react";

let initialData = [
  {
    name: "Jason",
    description: "We will make justice",
    votes: 0,
  },
  {
    name: "Carter",
    description: "We shall and we will win",
    votes: 0,
  },
  {
    name: "Smith",
    description: "The truth is with us",
    votes: 0,
  },
];

function App() {
  const [vote, setVote] = useState(initialData);
  const [votedIndex, setVotedIndex] = useState(null);

  function handleVoteCount(index) {
    // const updatedData = [...vote];
    // updatedData[index].votes += 1;
    // setVote(updatedData);
    // setVotedIndex(index);
    setVote((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = { ...updatedData[index], votes: updatedData[index].votes + 1 };
      return updatedData;
    });
    setVotedIndex(index);
  }

  const maxVotes = Math.max(...vote.map((item) => item.votes));

  return (
    <>
      <div className="container">
        <div className="options-grid">
          {vote.map((item, index) => (
            <div
              key={item.name}
              className={item.votes > 0 && item.votes === maxVotes ? "option max" : "option"}
            >
              <h2>{item.name}</h2>
              <p>"{item.description}"</p>
              <p>Votes: {item.votes}</p>
              <button onClick={() => handleVoteCount(index)} disabled={votedIndex === index}>
                {votedIndex === index ? "Voted" : "Vote"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
