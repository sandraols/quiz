import { React, useState, useEffect } from 'react';
import { Question } from './Components/Question';
import { Timer } from './Components/Timer';
import { AddTenSeconds } from './Components/AddTenSeconds';
import './QuestionsView.css';

export const QuestionsView = ({nextView, tenRandomQuestions, increaseScore}) => {
  const [questionNum, setQuestionNum] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [hasUsedAddTenSeconds, setHasUsedAddTenSeconds] = useState(false);

  const nextQuestion = () => {
    setQuestionNum(questionNum + 1)
    resetTimer();
    if (questionNum === 9) {
      nextView();
    }
  }

  // timer functions 
  useEffect(() => {
    const timer = setTimeout(() => {
      if (secondsLeft > 0) {
        decreaseSecond();
        return;
      }
      resetTimer();
      nextQuestion();
    }, 1000);
    return () => {
      return clearTimeout(timer);
    } 
  });

  const decreaseSecond = () => {
    setSecondsLeft(secondsLeft - 1);
  }

  const resetTimer = () => {
    setSecondsLeft(15);
  }

  const addTenSeconds = () => {
    setSecondsLeft(secondsLeft + 10);
    setHasUsedAddTenSeconds(true);
  }

  return(
    <main className="Questions-view">
      <div>
        <AddTenSeconds hasUsedAddTenSeconds={hasUsedAddTenSeconds} addTenSeconds={addTenSeconds}/>
      </div>
      <Timer secondsLeft={secondsLeft} />
      <Question 
        question={tenRandomQuestions[questionNum]} 
        index={questionNum + 1} 
        nextQuestion={nextQuestion} 
        increaseScore={increaseScore}/>
      <button onClick={nextView}>Go to results</button>
    </main>
  )
}