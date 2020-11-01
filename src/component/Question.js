import '../css/Question.css';
import { useEffect, useState } from 'react';
import { answerRandomizer } from '../util/helper';

function Random({
  allQuestions,
  highScore,
  setHighScore,
  setQuestions,
  setIsTitle,
}) {
  const [currIndx, setCurrentIndx] = useState(0);
  const [answerOption, setAnswerOption] = useState([]);
  const [score, setScore] = useState(0);

  const currQuestion = allQuestions[currIndx];

  useEffect(() => {
    if (currIndx < 10)
      setAnswerOption(
        answerRandomizer(currQuestion.correct, currQuestion.incorrect)
      );
  }, [currIndx]);

  function onClick(evt) {
    if (evt.target.value === currQuestion.correct) setScore(score + 1);
    setCurrentIndx(currIndx + 1);
  }

  function onSubmit() {
    if (score > highScore) setHighScore(score);
    onReset();
  }

  function onReset() {
    setScore(0);
    setQuestions([]);
    setIsTitle('title');
  }

  return (
    <div>
      {currIndx < 10 ? (
        <div>
          <hr />

          <div className="flex-container">
            <div id="currScore">Current Score: {score}/10 </div>
            <button onClick={onReset} className="flex-item color">
              Reset
            </button>
          </div>

          <div id="question">
            Q{currIndx + 1}. {currQuestion.question}
          </div>

          <div id="answer-list">
            {answerOption.map((curr) => (
              <button
                type="button"
                onClick={onClick}
                value={curr}
                key={curr}
                className="single-answer color"
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <hr />
          <div id="text">
            Congratulations! <br />
            You scored {score}/10... again?
          </div>
          <button onClick={onReset} className="end-screen color">
            Reset
          </button>
          <button onClick={onSubmit} className="end-screen color">
            Home
          </button>
        </div>
      )}
    </div>
  );
}

export default Random;
