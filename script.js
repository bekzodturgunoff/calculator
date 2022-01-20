const allNumbers = document.querySelectorAll(".numbers")
const clearBtn = document.querySelector(".btn-clear")
const deleteBtn = document.querySelector(".btn-delete")
const operator = document.querySelectorAll("[data-operator]")
const numbers = document.querySelectorAll("[data-number]")
const currentDisplay = document.querySelector("#current-screen")
const lastDisplay = document.querySelector("#last-screen")
const equal = document.querySelector('#equal-btn')
const dot = document.querySelector("#dot-btn")


allNumbers.forEach(number => number.addEventListener("click", () => {
  console.log("pressed")
}))



function add(numberOne, numberTwo) {
  return numberOne + numberTwo
}
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo
}
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo
}
function divide(numberOne, numberTwo) {
  return numberOne % numberTwo
}

