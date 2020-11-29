import React from 'react';
import './ResultView.css';

export const ResultView = ({ nextView, numOfCorrectAnswers, numOfIncorrectAnswers, numOfUnansweredQuestions }) => {

  return(
    <main className="Result-view">
      <div className="result-view__container">
        <h1>The Result</h1>
        <p>You scored {numOfCorrectAnswers} points</p>
        <p>You had {numOfIncorrectAnswers} incorrect answers</p>
        <p>You had {numOfUnansweredQuestions} unanswered questions</p>
        <iframe 
          src="https://giphy.com/embed/zGnnFpOB1OjMQ" 
          frameBorder="0" 
          className="result-view__giphy-embed" 
          title="Hobbits from Lord of The Rings applauses"
        ></iframe>
        <p>
          <a rel="noreferrer" target="_blank" href="https://giphy.com/gifs/lord-of-the-rings-hobbits-shire-zGnnFpOB1OjMQ">via GIPHY</a>
        </p>

        <button className="result-view__button" onClick={nextView}>Retake Quiz</button>
      </div>
    </main>
  )
}