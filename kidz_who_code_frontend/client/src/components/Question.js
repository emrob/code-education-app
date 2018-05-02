import React from 'react';

const Question = (props) => {

  const questionData = props.qAndAs[props.currentQuestion];

  const question = questionData.question;
  const correctAnswer = questionData.correct_answer;
  const incorrectAnswer1 = questionData.incorrect_answer_1;
  const incorrectAnswer2 = questionData.incorrect_answer_2;
  // debugger;

  return(
    <article className="question">
      <h2>Q{questionData.id}. {question}</h2>
      <button
        className="button"
        onClick={props.handleAnswerClick}
        value={correctAnswer}>
        {correctAnswer}
      </button>
      <button
        className="button"
        onClick={props.handleAnswerClick}
        value={incorrectAnswer1}>
        {incorrectAnswer1}
      </button>
      <button
        className="button"
        onClick={props.handleAnswerClick}
        value={incorrectAnswer2}>
        {incorrectAnswer2}
      </button>
    </article>
  )
}

export default Question;
