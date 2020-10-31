function Random(props) {
  console.log(props)
  const {questionObj, handleNext} = props
  const {question, incorrect, correct} = questionObj
  console.log(questionObj)
  return (
    <div>
      <div>{question}</div>

      <div>{incorrect}</div>
      <div>{correct}</div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Random;