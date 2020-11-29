import React from 'react';

export const ResultView = ({nextView, numOfCorrectAnswers}) => {
  return(
    <main>
      <h1>The Results</h1>
      <p>You scored {numOfCorrectAnswers} points</p>
      <button onClick={nextView}>Retake Quiz</button>
    </main>
  )
}