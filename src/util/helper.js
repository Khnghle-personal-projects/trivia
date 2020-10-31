//Goal is to accept an array of unknown length
  // Return a array of 10 different numbers (array of indexes)

export default function randomizer(data){
  const array = []
  while(array.length < 10){
    const random = Math.floor(Math.random() * data.length)
    if(array.indexOf(random) < 0){
      array.push(random)
    }
  }
  return array
}

