import '../css/App.css';
import data from '../data';
import Question from './Question';
import { useState } from 'react';
import helper from '../util/helper';

function Home() {
  const [highScore, setHighScore] = useState(0);
  const [score, setscore] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [currIndx, setCurrIdx] = useState(0);

  function handleStart() {
    const listOfQuestions = helper(data);
    setQuestions(listOfQuestions);
  }

  function handleNext() {
    setCurrIdx(++currIndx);
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
          <Question questionObj={data[currIndx]} handleNext={handleNext} />
        </>
      )}
    </div>
  );
}

export default Home;
