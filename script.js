class Calculator {
  constructor(lastDisplay, currentDisplay) {
    this.lastDisplay = lastDisplay
    this.currentDisplay = currentDisplay
    this.clear()
  }
  clear() {
    this.lastDisplay.innerText = ""
    this.currentDisplay.innerText = ""
    this.operator = undefined
  }

  delete() {

  }

  appendNumber(number) {
    if (number === "." && currentDisplay.innerText.includes(".")) return
    currentDisplay.innerText = currentDisplay.innerText + number

  }


  chooseOperation(operation) {
    this.operation = operation
    this.lastDisplay = this.currentDisplay
    this.currentDisplay.innerText = ""


  }

  compute() {

  }

  upDateDisplay() {
    this.currentDisplay = this.currentDisplay


  }

}

const allNumbers = document.querySelectorAll(".numbers")
const clearBtn = document.querySelector(".btn-clear")
const deleteBtn = document.querySelector(".btn-delete")
let operator = document.querySelectorAll("[data-operator]")
const numbers = document.querySelectorAll("[data-number]")
const currentDisplay = document.querySelector("[data-current-screen]")
const lastDisplay = document.querySelector("[data-last-screen]")
const equal = document.querySelector('#equal-btn')
const dot = document.querySelector("#dot-btn")
const calculator = new Calculator(lastDisplay, currentDisplay)

numbers.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.upDateDisplay()
  })
})


operator.forEach(operation => {
  operation.addEventListener("click", () => {
    calculator.chooseOperation(operation.innerText)
    calculator.upDateDisplay()
  })
})

clearBtn.addEventListener("click", () => {
  calculator.clear()
})

// equal.addEventListener("click", () => {
//   if (currentDisplay.innerText.includes("+")) return
//   if (currentDisplay.innerText.includes("-")) return
//   if (currentDisplay.innerText.includes("×")) return
//   if (currentDisplay.innerText.includes("÷")) return
//   add(currentDisplay.innerText, lastDisplay.innerText)
//   subtract(currentDisplay.innerText, lastDisplay.innerText)
//   multiply(currentDisplay.innerText, lastDisplay.innerText)
//   divide(currentDisplay.innerText, lastDisplay.innerText)
// })

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

