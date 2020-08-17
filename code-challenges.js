// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

const sentenceGenerator = (array) => {
  // capitalizing the names:
    // mapped the array
    let capName = array.map(value => {
    let separatedName = value.name.split(" ")
    return separatedName.map(value => {
      // slice the first letter off, save to variable
      let firstLetter = value.slice(0, 1).toUpperCase()
      // slice the rest of the word, save to variable
      // string interpolation into a new variable
      let restOfWord = value.slice(1)
      return firstLetter+restOfWord
      // joined together with first and last name
    }).join(" ")
  })
  // Interpolated the capitalized names with occupation:
  // created an empty array
  let finalSentence = []
    // for loop
    for(let i=0; i<array.length; i++){
      // interpolated the sentence with cap names and occupations
      // pushed into new array
      finalSentence.push(`${capName[i]} is a ${array[i].occupation}.`)
    }
  // return the final sentence array
  return finalSentence
}
console.log(sentenceGenerator(people))



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// create a function that takes in an array
const remainder = (array) => {
  // create a var that holds an empty array
  let numsOnly = []
  // create a for loop that holds a conditional
  for(let i=0; i<array.length; i++){
    // if typeof array[i] is a number
    if(typeof (array[i]) === "number")
      // push into empty array
      numsOnly.push(array[i])
  }
  // use a map to iterate through the array
  return numsOnly.map(value => {
    // return value of modulo 3
    return value % 3
  })
}
console.log(remainder(testingArray1))
console.log(remainder(testingArray2))


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]


const noDups = (...arrays) => {
  return [].concat(...arrays).filter((value, index, array) => {
    return index == array.indexOf(value)
  })
}
console.log(noDups(testingArray3, testingArray4))
