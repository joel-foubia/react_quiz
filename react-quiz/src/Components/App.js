import React, { useState } from 'react'
const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  answer: {
    color: "red"
  },
  options: {
    marginBottom: '5px',
    cursor: "pointer"
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    correct: 'Paris',

  },
  {
    question: 'What is the capital of Germany?',
    options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
    correct: 'Berlin',
  },
];

export default function App() {
  // do not modify the questions or answers below
  const [showResults, setShowResults] = useState(true);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  let currectColor = "";
  function handleOption(option) {
    if (option === questions[currentQuestion].correct) {
      currectColor = 'answer';
      setScore(score + 1);
    }
  }
  function handleNext(){
    setCurrentQuestion(currentQuestion + 1);
  }
  return (

    <div style={style.container}>
      <div>Current score : {score}</div>
      <div>Question {currentQuestion + 1} out of {questions.length}</div>
      {showResults ?
        <div className='parent'>
          <div id="question" style={style.question}>{questions[currentQuestion].question}</div>
          <div style={style.options}>

            {questions[currentQuestion].options.map((option, index) => {
              return (
                <p key={index} onClick={() => handleOption(option)} className={`${currectColor}`}>{option}</p>
              );
            })}</div>
          {
            currectColor ?
            <button style={style.button} id="submitBtn" onClick={()=> handleNext}>
              Next
            </button>
            :
            <></>
          }
        </div>
        :
        <div id="feedback" style={style.feedback}>Your Final Result is : 2 of 2</div>
      }
    </div>
  );
}

