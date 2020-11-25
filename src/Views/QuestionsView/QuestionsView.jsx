import { React, useState } from 'react';
import { Question } from './Components/Question';
import './QuestionsView.css';

export const QuestionsView = ({nextView, tenRandomQuestions, increaseScore}) => {
  const [questionNum, setQuestionNum] = useState(0);
  console.log(questionNum);

  const nextQuestion = () => {
    setQuestionNum(questionNum + 1)
    if (questionNum === 9) {
      nextView();
    }
  }

  return(
    <main className="Questions-view">
      <Question 
        question={tenRandomQuestions[questionNum]} 
        index={questionNum + 1} 
        nextQuestion={nextQuestion} 
        increaseScore={increaseScore}/>
      <button onClick={nextView}>Go to results</button>
    </main>
  )
}