import { React, useState, useEffect } from 'react';
import './Timer.css';

export const Timer = ({ nextQuestion }) => {
  const [secondsLeft, setSecondsLeft] = useState(15);
  console.log(secondsLeft);
  
    useEffect(() => {
      setTimeout(() => {
        if (secondsLeft > 0) {
          decreaseSecond();
          return;
        }
        resetTimer();
        nextQuestion();
      }, 1000);
    });

    const decreaseSecond = () => {
      setSecondsLeft(secondsLeft - 1);
    }

    const resetTimer = () => {
      setSecondsLeft(15);
    }

  return(
    <div className="Timer">
      <p>Seconds left: {secondsLeft}</p>
    </div>
  )
};