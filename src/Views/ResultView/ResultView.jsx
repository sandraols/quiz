import React from 'react';

export const ResultView = ({nextView}) => {
  return(
    <main>
      <h1>The Results</h1>
      <button onClick={nextView}>Retake Quiz</button>
    </main>
  )
}