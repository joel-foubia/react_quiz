import React from "react";

export default function Option({ questions, dispatch, answer }) {
  function handleAnswer(i) {
    dispatch({ type: "newAnswer", payload: i });
  }
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((options, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={index}
          disabled={hasAnswered}
          onClick={() => handleAnswer(index)}
        >
          {options}
        </button>
      ))}
    </div>
  );
}
