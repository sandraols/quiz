import { React, useState, useEffect } from 'react';
import { Question } from './Components/Question';
import { Timer } from './Components/Timer';
import { AddTenSeconds } from './Components/AddTenSeconds';
import { FiftyFifty } from './Components/FiftyFifty';
import './QuestionsView.css';

export const QuestionsView = ({ nextView, tenRandomQuestions, increaseScore, increaseNumOfIncorrectAnswers }) => {
  const [questionNum, setQuestionNum] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [hasUsedAddTenSeconds, setHasUsedAddTenSeconds] = useState(false);
  const [hasUsedFiftyFifty, setHasUsedFiftyFifty] = useState(false);
  const [twoFalseAlternatives, setTwoFalseAlternatives] = useState([]);

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

  // lifelines
  const addTenSeconds = () => {
    setSecondsLeft(secondsLeft + 10);
    setHasUsedAddTenSeconds(true);
  }

  const useFiftyFifty = () => {
    const twoFalseAlternatives = [];
    const question = tenRandomQuestions[questionNum];
    question.alternatives.forEach(alternative => {
      if (twoFalseAlternatives.length === 2) {
        return;
      }
      if (!alternative.isCorrect) {
        twoFalseAlternatives.push(alternative);
      }
    });
    setHasUsedFiftyFifty(true);
    setTwoFalseAlternatives(twoFalseAlternatives);
  }

  return(
    <main className="Questions-view">
      <div className="questions-view__container">
        <Question 
          question={tenRandomQuestions[questionNum]} 
          index={questionNum + 1} 
          increaseScore={increaseScore}
          increaseNumOfIncorrectAnswers={increaseNumOfIncorrectAnswers}
          twoFalseAlternatives={twoFalseAlternatives}
          nextQuestion={nextQuestion} 
        />
        <div className="questions-view__time-lifelines">
          <Timer secondsLeft={secondsLeft} />
          <p className="questions-view__lifelines-paragraph">Lifelines:</p>
          <AddTenSeconds hasUsedAddTenSeconds={hasUsedAddTenSeconds} addTenSeconds={addTenSeconds}/>
          <FiftyFifty hasUsedFiftyFifty={hasUsedFiftyFifty} useFiftyFifty={useFiftyFifty} />
        </div>
      </div>
    </main>
  )
}