import './App.css';
import { React, useState } from 'react';
import { IntroView } from './Views/IntroView/IntroView';
import { QuestionsView } from './Views/QuestionsView/QuestionsView';
import { ResultView } from './Views/ResultView/ResultView';


function App() {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  
  const nextView = () => {
    if (currentViewIndex === views.length - 1) {
      setCurrentViewIndex(0);
      return
    }
    setCurrentViewIndex(currentViewIndex + 1);
  }
  
  const views = [
    <IntroView nextView={nextView}/>,
    <QuestionsView nextView={nextView}/>,
    <ResultView nextView={nextView}/>
  ];

  console.log(views.length);
  console.log(currentViewIndex);

return (
    <div className="App">
       {views[currentViewIndex]}
    </div> 
  );
}

export default App;
