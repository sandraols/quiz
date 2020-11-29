import { React } from 'react';
import './Timer.css';

export const Timer = ({ secondsLeft }) => {

  return(
    <p className="timer__paragraph">Seconds left: {secondsLeft}</p>
  )
};