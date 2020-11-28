import { React } from 'react';
import './Timer.css';

export const Timer = ({ secondsLeft }) => {

  return(
    <div className="Timer">
      <p>Seconds left: {secondsLeft}</p>
    </div>
  )
};