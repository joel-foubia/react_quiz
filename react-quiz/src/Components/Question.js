import Option from "./Option";
import React from "react";

export default function Question({ questions, dispatch, answer }) {
  // console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option dispatch={dispatch} answer={answer} questions={questions} />
    </div>
  );
}
