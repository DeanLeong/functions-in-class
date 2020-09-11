// function multiply(num1, num2 = 1) {
//   return num1 * num2
// }

// // console.log(multiply)
// let answer = multiply(5, 3)
// console.log(answer)
//                         // 15
// let newAnswer = multiply(answer, 2)
// console.log(newAnswer)

// let superAnswer = multiply(newAnswer, answer)
// console.log(superAnswer)


// let num2 = 5;

// function multiply(num1) {
//   return num2 = num1 * num2; // side effect
  
// }

// console.log(multiply(4))



// console.log(result)



// Lab Time

// 1. Write a function that console.logs 'Hello World'

function helloWorld() {
  console.log('Hello World')
}

// helloWorld()


// 2. Write a function that console.logs whatever you want it to say

function sayPhrase(phrase) {
  console.log(phrase)
}

let kashiff = 'Kashiff'

// sayPhrase(kashiff)
// sayPhrase('Pizza')


// 3. Write a function that prints every number between 1 and 100.

function printNums() {
  for (let i = 1; i < 101; i++) {
    console.log(i)
  }
}

// printNums()

function printArg(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i)
  }
}

// printArg(500)

// 4. Sum an Array

let nums = [2, 4, 6, 8]

function sumArray(numsArr) {
  let sum = 0
  for (let i = 0; i < numsArr.length; i++) {
    // console.log(numsArr[i])
    sum += numsArr[i]
  }
  // console.log("Line 82", sum)
  return sum
}

let sum = sumArray(nums)
// console.log("Line 87", sum)

function add(num, num1) {
  return num + num1
}

const bigNum = add(sum, 2)
// console.log(bigNum)

// 5. Print student names

const students = [
  'Alice',
  'Andrew',
  'Casey',
  'Damian',
  'Grant',
  'Howie',
  'Wade',
  'Kat',
  'Kimbrad',
  'Kiu',
  'Natasha',
  'Obi',
  'Pedro',
  'Sarah',
  'Scott',
  'Tiffany',
  'Zhe',
];

const simpsons = ['Bart', 'Lisa', 'Homer', 'Marge']

function printNames(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} is in SEI Phoenix`)
  }
}

// printNames(students)
// console.log('---------')
// printNames(simpsons)


// 6. Print word length

// [1, 2, 3, 4]

// let wordList = ['i', 'am', 'the', 'best']

// function wordLength(words) {
//   let wordCount = []
//   for (let i = 0; i < words.length; i++) {
//     // console.log(words[i])
//     // console.log(words[i].length)
//     wordCount.push(words[i].length)
//   }
//   console.log(wordCount)
//   return wordCount
// }

// wordLength(wordList)

// let i = 'Hello'
// console.log(i)

// function count() {
//   for (let i = 0; i < 11; i++) {
//     console.log(i)
//   }
// }

// count()

// console.log(i)


// 7.
function toPower(x, y, z) {
  // (1 * 2)^3
  // let result = ((x * y)**z)
  // let base = x * y
  // let result =  Math.pow(base, z)
  console.log(((x * y)**z))
}

toPower(1, 2, 3)