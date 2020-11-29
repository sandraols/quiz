import React from 'react';

export const ResultView = ({ nextView, numOfCorrectAnswers, numOfIncorrectAnswers, numOfUnansweredQuestions }) => {

  return(
    <main>
      <h1>The Results</h1>
      <p>You scored {numOfCorrectAnswers} points</p>
      <p>You have {numOfIncorrectAnswers} incorrect answers</p>
      <p>You have {numOfUnansweredQuestions} unanswered questions</p>
      
      <button onClick={nextView}>Retake Quiz</button>
    </main>
  )
}