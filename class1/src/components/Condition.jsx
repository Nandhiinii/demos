import React, { useState } from "react";

const Condition = () => {
  const [level, setLevel] = useState(0);

  const increaseLevel = () => {
    setLevel(prev => prev + 1);
  };

  let message;

  switch (level) {
    case 0:
      message = <p>Welcome! Click to start</p>;
      break;
    case 1:
      message = <p>Level 1: Let's Go! </p>;
      break;
    case 2:
      message = <p>Level 2: You're getting better!</p>;
      break;
    case 3:
      message = <p>Level 3: Almost there! </p>;
      break;
    case 4:
      message = <p>Level 4: Final Push! </p>;
      break;
    case 5:
      message = <p> You completed all levels!</p>;
      break;
    default:
      message = <p>Unknown Level</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Switch Statement Example</h2>
      <p>Current Level: {level}</p>
      {message}
      <button 
        onClick={increaseLevel} 
        disabled={level === 5}
        style={{ marginTop: "10px", padding: "10px" }}
      >
        Increase Level
      </button>
    </div>
  );
};

export default Condition;
