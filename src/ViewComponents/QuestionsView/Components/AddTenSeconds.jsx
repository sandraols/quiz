import { React } from 'react';

export const AddTenSeconds = ({ addTenSeconds, hasUsedAddTenSeconds }) => {
  
  return(
    <div className="Add-ten-seconds">
      <button disabled={hasUsedAddTenSeconds} onClick={addTenSeconds}>Add ten seconds</button>
    </div>
  )
};