import { React } from 'react';

export const QuestionsView = ({nextView}) => {

  return(
    <main>
      <h1>Questions View</h1>
      <button onClick={nextView}>Go to results</button>
    </main>
  )
}