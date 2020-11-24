import { React, useState } from 'react';
import { Question } from './Components/Question';
import './QuestionsView.css';

export const QuestionsView = ({nextView, tenRandomQuestions}) => {
  const [questionNum, setQuestionNum] = useState(0);
  console.log(tenRandomQuestions);

  const nextQuestion = () => {
    setQuestionNum(questionNum + 1)
  }
  return(
    <main className="Questions-view">
      <Question question={tenRandomQuestions[questionNum]} index={questionNum + 1} nextQuestion={nextQuestion}/>
      <button onClick={nextQuestion}>Go to results</button>
      <button onClick={nextView}>Go to results</button>
    </main>
  )
}