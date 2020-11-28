import { React } from 'react';

export const FiftyFifty = ({ hasUsedFiftyFifty, useFiftyFifty }) => {
  
  return(
    <div className="Fifty-fifty">
      <button disabled={hasUsedFiftyFifty} onClick={useFiftyFifty}>Remove two alternatives</button>
    </div>
  )
};