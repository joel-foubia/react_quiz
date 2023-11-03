import React from "react";

export default function Progress({
  maxPossiblePoints,
  numQuestions,
  answer,
  index,
  points,
}) {
  const progress = Number(answer !== null);
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + progress} />
      <p>
        Question
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>
      <p>
        Question
        <strong>
          {" "}
          {points}/{maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}
