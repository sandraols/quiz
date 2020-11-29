import { React } from 'react';
import './Question.css';

export const Question = (
  { 
    question, 
    index, 
    nextQuestion, 
    increaseScore, 
    increaseNumOfIncorrectAnswers, 
    twoFalseAlternatives
  }
) => {

  const questionAlternatives = question.alternatives;
  const gifLink = question.gif.gifLink;
  const gifLinkEmbedded = question.gif.gifLinkEmbedded;
  const gifTitle = question.gif.title;

  const checkIfCorrect = (index) => {
    increaseScore(questionAlternatives[index].isCorrect);
    increaseNumOfIncorrectAnswers(questionAlternatives[index].isCorrect);
  }

  const handleClick = (index) => {
    checkIfCorrect(index);
    nextQuestion();
  }

  return(
    <section className="Question">
      <div className="question__container">
      <h1>Question {index}</h1>
        <p className="question__paragraph">
          {question.question}
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
        <div className="question__alternatives-container">
          <div className="question__alternatives-top">
            <button
              onClick={() => {handleClick(0)}}
              disabled={twoFalseAlternatives.includes(questionAlternatives[0])}
            >
              {questionAlternatives[0].alternative}
            </button>
            <button 
              onClick={() => {handleClick(1)}} 
              disabled={twoFalseAlternatives.includes(questionAlternatives[1])}
            >
              {questionAlternatives[1].alternative}
            </button>
          </div>
          <div className="question__alternatives-bottom">
            <button 
              onClick={() => {handleClick(2)}}
              disabled={twoFalseAlternatives.includes(questionAlternatives[2])} 
            >
              {questionAlternatives[2].alternative}
            </button>
            <button 
              onClick={() => {handleClick(3)}}
              disabled={twoFalseAlternatives.includes(questionAlternatives[3])} 
            >
              {questionAlternatives[3].alternative}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}