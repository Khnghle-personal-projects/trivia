import '../css/Home.css';
import data from '../data';
import Question from './Question';
import { useState } from 'react';
import {questionRandomizer} from '../util/helper';

function Home() {
  const [highScore, setHighScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  function handleStart() {
    const listOfQuestions = questionRandomizer(data).map(idx => data[idx]);
    setQuestions(listOfQuestions);
  }

  return (
    <div className="App">
      <h1 id="title">Trivia Craze</h1>

      {!questions.length ? (
        <>
          <div id="score">Best Score: {highScore}</div>
          <button onClick={handleStart} id="start-button">Start</button>
        </>
      ) : (
        <>
          <Question allQuestions = {questions} setQuestions={setQuestions} highScore = {highScore} setHighScore={setHighScore}/>
        </>
      )}
    </div>
  );
}

export default Home;
