//Goal is to accept an array of unknown length
  // Return a array of 10 different numbers (array of indexes)

export function questionRandomizer(data){
  const array = []
  while(array.length < 10){
    const random = Math.floor(Math.random() * data.length)
    if(!array.includes(random)){
      array.push(random)
    }
  }
  return array
}

export function answerRandomizer (correct, incorrect) {
  const answers = [...incorrect, correct]
  const index = Math.floor(Math.random() * answers.length)
  
  const temp = answers[index]
  answers[index] = answers[answers.length -1]
  answers[answers.length - 1] = temp

  return answers;
}
