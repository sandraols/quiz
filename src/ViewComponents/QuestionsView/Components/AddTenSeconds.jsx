import { React } from 'react';
import './AddTenSeconds.css';

export const AddTenSeconds = ({ addTenSeconds, hasUsedAddTenSeconds }) => {
  
  return(
    <button className="add-ten-seconds__button" disabled={hasUsedAddTenSeconds} onClick={addTenSeconds}>+10s</button>
  )
};