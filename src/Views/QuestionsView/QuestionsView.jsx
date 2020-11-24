import { React, useState } from 'react';
import questions from '../../questions.json';

export const QuestionsView = ({nextView}) => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const nextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      nextView()
      return
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  console.log(questions);
  console.log(questions[currentQuestionIndex].question);
  console.log(currentQuestionIndex);

  return(
    <main>
      <h1>Questions View</h1>
      {questions[currentQuestionIndex].question}
      <button onClick={nextQuestion}>Next question</button>
      <button onClick={nextView}>Go to results</button>
    </main>
  )
}