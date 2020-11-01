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
  
  for(let i = answers.length - 1; i >0; i--){
    const j = Math.floor(Math.random() * (i+1))
    swap(answers, j, i)
  }
  return answers;
}

function swap (arr, indx1, indx2){
  const temp = arr[indx1]
  arr[indx1] = arr[indx2]
  arr[indx2] = temp
}
