import { useEffect, useState } from 'react';
import {answerRandomizer} from '../util/helper';


function Random({allQuestions, score, setScore, highScore, setHighScore, setQuestions}) {
  const [currIndx, setCurrentIndx] = useState(0);
  const [answerOption, setAnswerOption] = useState([])

    const currQuestion = allQuestions[currIndx];

    useEffect( ()=> {
      if(currIndx < 10) setAnswerOption(answerRandomizer(currQuestion.correct, currQuestion.incorrect))
    }, [currIndx])

    function onClick (evt) {
      if(evt.target.value === currQuestion.correct) setScore(score + 1)
      setCurrentIndx(currIndx + 1)
    }

    function onSubmit () {
      if(score > highScore) setHighScore(score)
      setScore(0)
      setQuestions([])
    }
    
  return (
    <div>

      {
        (currIndx < 10)? 
        <div>
          <div>{currQuestion.question}</div>
          
          {answerOption.map((curr) => (
            <button type="button" onClick={onClick} value={curr}>{curr}</button>
          ))}

        </div> : 
        <div>
          You scored {score}/10
          <button onClick={onSubmit}>Home</button>  
        </div>

      }
    </div>
  );
}

export default Random;
