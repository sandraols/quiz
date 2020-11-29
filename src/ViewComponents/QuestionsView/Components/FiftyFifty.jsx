import { React } from 'react';
import './FiftyFifty.css';

export const FiftyFifty = ({ hasUsedFiftyFifty, useFiftyFifty }) => {
  
  return(
    <button className="fifty-fifty__button" disabled={hasUsedFiftyFifty} onClick={useFiftyFifty}>50/50</button>
  )
};