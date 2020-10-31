import '../css/App.css';
import data from '../data';
import Question from './Question';
import { useState } from 'react';
import {questionRandomizer} from '../util/helper';

function Home() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  function handleStart() {
    const listOfQuestions = questionRandomizer(data).map(idx => data[idx]);
    setQuestions(listOfQuestions);
  }

  return (
    <div className="App">
      <h1>Trivia Craze</h1>

      {!questions.length ? (
        <>
          <div>Best Score: {highScore}</div>
          <button onClick={handleStart}>Start</button>
        </>
      ) : (
        <>
          <div>Current Score: {score} </div>
          <Question allQuestions = {questions} score={score} setScore={setScore} setQuestions={setQuestions} highScore = {highScore} setHighScore={setHighScore}/>
        </>
      )}
    </div>
  );
}

export default Home;
