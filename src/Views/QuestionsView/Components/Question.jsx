import { React, useState } from 'react';
import questions from '../../../questions.json';

export const Question = ({nextView}) => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex].question;
  const questionAlternatives = questions[currentQuestionIndex].alternatives;
  
  const nextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      nextView()
      return
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  console.log(currentQuestion);
  console.log(currentQuestionIndex);
  console.log(questionAlternatives);

  return(
    <main className="Question">
      <div className="question__container">
        <h1 className="question__title">Question {currentQuestionIndex +1}</h1>
        <p className="question__question">
          {currentQuestion}
        </p>
        <div className="question__alternative-container">
          <button className="question__alternative">{questionAlternatives[0].alternative}</button>
          <button className="question__alternative">{questionAlternatives[1].alternative}</button>
          <button className="question__alternative">{questionAlternatives[2].alternative}</button>
          <button className="question__alternative">{questionAlternatives[3].alternative}</button>
        </div>
        <button className="question__next" onClick={nextQuestion}>Next question</button>
      </div>
    </main>
  )
}