import React from "react";
import App from "./App";

export default function FinishedScreen({
  numPossiblePoints,
  hightScore,
  points,
  dispatch,
}) {
  const percentage = (points / numPossiblePoints) * 100;
  let emoji;
  function handleRest() {
    dispatch({ type: "restart" });
  }
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage <= 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😁";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> Your Score is <strong>{points}</strong> out of{" "}
        {numPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore : {hightScore} points)</p>
      <button className="btn btn-ui" onClick={() => handleRest()}>
        Restart quiz
      </button>
    </>
  );
}
