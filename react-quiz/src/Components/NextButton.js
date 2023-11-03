import React from "react";

export default function NextButton({ index, numQuestion, dispatch, answer }) {
  if (answer === null) return null;
  function handleNextButton() {
    dispatch({ type: "nextQuestion" });
  }
  function handleFinishedButton() {
    dispatch({ type: "finish" });
  }
  if (index < numQuestion - 1) {
    return (
      <button className="btn btn-ui" onClick={() => handleNextButton()}>
        Next
      </button>
    );
  }
  if (index === numQuestion - 1) {
    return (
      <button className="btn btn-ui" onClick={() => handleFinishedButton()}>
        finished
      </button>
    );
  }
}
