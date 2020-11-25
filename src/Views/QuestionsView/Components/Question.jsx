import { React } from 'react';
import './Question.css';

export const Question = ({question, index, nextQuestion, increaseScore}) => {

  const questionAlternatives = question.alternatives;
  const gifLink = question.gif.gifLink;
  const gifLinkEmbedded = question.gif.gifLinkEmbedded;
  const gifTitle = question.gif.title;

  const checkIfCorrect = (index) => {
    increaseScore(questionAlternatives[index].isCorrect);
  }

  const handleClick = (index) => {
    checkIfCorrect(index);
    nextQuestion();
  }

  return(
    <section className="Question">
      <div className="question__container">
      <h1 className="question__title">Question {index}</h1>
        <p className="question__question">
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
        <div className="question__alternative-container">
          <button
            onClick={() => {handleClick(0)}}
            className="question__alternative"
          >
              {questionAlternatives[0].alternative}
          </button>
          <button 
            onClick={() => {handleClick(1)}} 
            className="question__alternative"
          >
            {questionAlternatives[1].alternative}
          </button>
          <button 
            onClick={() => {handleClick(2)}} 
            className="question__alternative"
          >
            {questionAlternatives[2].alternative}
          </button>
          <button 
            onClick={() => {handleClick(3)}} 
            className="question__alternative"
          >
            {questionAlternatives[3].alternative}
          </button>
        </div>
        {/* <button className="question__next" onClick={nextQuestion}>Next question</button> */}
      </div>
    </section>
  )
}