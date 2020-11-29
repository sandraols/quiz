import './App.css';
import { React, useState } from 'react';
import { IntroView } from './ViewComponents/IntroView/IntroView';
import { QuestionsView } from './ViewComponents/QuestionsView/QuestionsView';
import { ResultView } from './ViewComponents/ResultView/ResultView';
import questions from './questions.json';

//move this part to separate js file
const askedQuestions = [];

const getRandomQuestion = () => {
  const randomQuestionIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomQuestionIndex];
  if (askedQuestions.includes(randomQuestion)) {
    if (askedQuestions.length === questions.length) {
      console.log('No more questions left!');
      return;
    }
    return getRandomQuestion();
  }
  askedQuestions.push(randomQuestion);
  return randomQuestion;
}

const getTenRandomQuestions = () => {
  const tenRandomQuestions = [];
  for (let i = 0; i < 10; i++) {
    tenRandomQuestions.push(getRandomQuestion());
  }
  return tenRandomQuestions;
}

const tenRandomQuestionsInit = getTenRandomQuestions();

function App() {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);
  const [tenRandomQuestions, setTenRandomQuestions] = useState(tenRandomQuestionsInit); 

  const nextView = () => {
    if (currentViewIndex === views.length - 1) {
      setCurrentViewIndex(0);
      setTenRandomQuestions(getTenRandomQuestions());
      resetScore();
      return
    }
    setCurrentViewIndex(currentViewIndex + 1);
  }
  
  const increaseScore = (isCorrect) => {
    if (isCorrect) {
      setNumOfCorrectAnswers(numOfCorrectAnswers + 1);
    }
  }

  const resetScore = () => {
    setNumOfCorrectAnswers(0);
  }
  
  const views = [
    <IntroView nextView={nextView}/>,
    <QuestionsView nextView={nextView} tenRandomQuestions={tenRandomQuestions} increaseScore={increaseScore}/>,
    <ResultView nextView={nextView} numOfCorrectAnswers={numOfCorrectAnswers} />
  ];

return (
    <div className="App">
       {views[currentViewIndex]}
    </div> 
  );
}

export default App;
