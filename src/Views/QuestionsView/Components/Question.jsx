import { React, useState } from 'react';
import questions from '../../../questions.json';
import './Question.css';

export const Question = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const question = questions[currentQuestionIndex];
  const currentQuestion = question.question;
  const questionAlternatives = question.alternatives;

  //gif
  const gifLink = question.gif.gifLink;
  const gifLinkEmbedded = question.gif.gifLinkEmbedded;
  const gifTitle = question.gif.title;
  
  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }
  console.log(question);
  console.log(currentQuestion);
  console.log(currentQuestionIndex);
  console.log(questionAlternatives);

  return(
    <section className="Question">
      <div className="question__container">
        <h1 className="question__title">Question {currentQuestionIndex +1}</h1>
        <p className="question__question">
          {currentQuestion}
        </p>
        <div className="question__gif-container">
          <iframe 
            src={gifLinkEmbedded}
            title={gifTitle}  
            frameBorder="0" 
            className="question__giphy-embed" 
          ></iframe>
          <p>
            <a href={gifLink} rel="noreferrer" target="_blank">via GIPHY</a>
          </p>
        </div>
        <div className="question__alternative-container">
          <button className="question__alternative">{questionAlternatives[0].alternative}</button>
          <button className="question__alternative">{questionAlternatives[1].alternative}</button>
          <button className="question__alternative">{questionAlternatives[2].alternative}</button>
          <button className="question__alternative">{questionAlternatives[3].alternative}</button>
        </div>
        <button className="question__next" onClick={nextQuestion}>Next question</button>
      </div>
    </section>
  )
}