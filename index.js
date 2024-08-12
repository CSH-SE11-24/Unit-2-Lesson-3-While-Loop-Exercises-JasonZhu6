// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let num = 1

while (num <= 10) {
  console.log(num)
  num++
}

// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40
let num2 = 20

while (num2 <= 40) {
  if (num2 % 2 == 0) {
    console.log(num2)
  }
  num2++
}

// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1
let positiveNum = parseInt(prompt("Enter a positive number: "))

while (positiveNum >= 1) {
  console.log(positiveNum)
  positiveNum--
}

// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.
let positiveInt = parseInt(prompt("Enter a positive integer: "))
let sum = 0
let counter = 1

while (counter <= positiveInt) {
  sum = sum + counter
  counter++
}
console.log(`The sum from 1 - ${positiveInt} is ${sum}.`)

// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").
let pcPassword = "secret"

let userPassword = prompt("Guess the password: ")

while (pcPassword != userPassword) {
  userPassword = prompt("Try again, guess a different one: ")
}
console.log(`You got it! The password is ${pcPassword}!`)

// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after
let passwordStrength = prompt("Enter a password: ")
let condition = false
let letter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
let specialChar = ["@", "#", "$"]
let index = 0
let containLower = 0
let containUpper = 0
let containSpecial = 0

while (!condition) {
  while (index < passwordStrength.length) {
    containLower = passwordStrength.indexOf(letter[index])
    index++
  }
  if (containLower != -1) {
    index = 0
    while (index < passwordStrength.length) {
      containUpper = passwordStrength.indexOf(letter[index].toUpperCase)
      index++
    }
    if (containUpper != -1) {
      index = 0
      while (index < passwordStrength.length) {
        containSpecial = passwordStrength.indexOf(specialChar[index])
        index++
      }
      if (containSpecial != -1) {
        console.log("You are all set! ")
        condition = true
      }
      else {
        console.log("You need a special letter. ")
        break
      }
    }
    else {
      console.log("You need to contain a upper case letter. ")
      break
    }
  } 
  else {
    console.log("You need to contain a lower case letter. ")
    break
  }
}