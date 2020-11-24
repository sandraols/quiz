import { React} from 'react';
import { Question } from './Components/Question';

export const QuestionsView = ({nextView}) => {

  return(
    <main>
      <Question />
      <button onClick={nextView}>Go to results</button>
    </main>
  )
}