import React from 'react';
import './IntroView.css';

export const IntroView = ({nextView}) => {
  return(
    <main className="Intro-view">
      <div className="intro-view__container">
        <h1>Welcome to this quiz</h1>
        <button onClick={nextView}>Start Quiz</button>
      </div>
    </main>
  )
}