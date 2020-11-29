import React from 'react';
import './IntroView.css';

export const IntroView = ({ nextView }) => {
  return(
    <main className="Intro-view">
      <div className="intro-view__container">
        <h1>What's your movie skills?</h1>
        <p className="intro-view__paragraph">Welcome to this quiz, where your 
           knowledge about movies, actresses and actors will be put to the test!
           <br/><br/>
           You will be presented with ten movie related questions, each with 
           four alternative answers. Press on the alternative you think is correct,
           only one is. You have 15 seconds to answer each question.
           <br/><br/>
           During the game you also have two lifelines that you can use 
           whenever you want: 50/50 and +10s. 50/50 will remove two of the wrong 
           answers and +10s will give you ten extra seconds on the current question. 
           The lifelines can only be used once each round.
           <br/><br/>
           May the Force be with you!
        </p>
        <button className="intro-view__button" onClick={nextView}>Start</button>
      </div>
    </main>
  )
}