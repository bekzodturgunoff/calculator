class Calculator {
  constructor(lastDisplay, currentDisplay) {
    this.lastDisplay = lastDisplay
    this.currentDisplay = currentDisplay
    this.clear()
  }
  clear() {
    lastDisplay.innerText = ""
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
    if (currentDisplay.innerText === "") return
    if (lastDisplay.innerText !== "") {
      this.compute()
    }
    this.operation = operation
    lastDisplay.innerText = currentDisplay.innerText
    this.currentDisplay.innerText = ""


  }

  compute() {
    let computation
    const last = parseFloat(lastDisplay.innerText)
    const current = parseFloat(currentDisplay.innerText)
    if (isNaN(last) || isNaN(current)) return
    switch (this.operation) {
      case "+":
        computation = last + current
        break
      case "-":
        computation = last + current
        break
      case "÷":
        computation = last / current
        break
      case "×":
        computation = last * current
        break
      default:
        return
    }
    currentDisplay.innerText = computation
    operation = undefined
    lastDisplay.innerText = ""
  }

  upDateDisplay() {
    this.currentDisplay = this.currentDisplay
    this.lastDisplay = currentDisplay.innerText


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

equal.addEventListener("click", (button) => {
  calculator.compute()
  calculator.upDateDisplay()
  console.log("WTF is goingo on here? :)")
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

// window.addEventListener("keydown", (e) => {
//   const dataKey = document.querySelector(`[data-key"${e.keycode}"]`)
//   numbers.forEach(number => {
//     number.addEventListener("keydown", () => {
//       calculator.appendNumber(number.innerText)

//     })

//   })
//   console.log(dataKey)