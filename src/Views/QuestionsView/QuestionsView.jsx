import { React} from 'react';
import { Question } from './Components/Question';
import './QuestionsView.css';

export const QuestionsView = ({nextView}) => {

  return(
    <main className="Questions-view">
      <Question />
      <button onClick={nextView}>Go to results</button>
    </main>
  )
}