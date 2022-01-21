class Calculator {
  constructor(lastDisplay, currentDisplay) {
    this.lastDisplay = lastDisplay;
    this.currentDisplay = currentDisplay;
    this.clear();
  }
  clear() {
    this.lastDisplay.innerText = "";
    this.currentDisplay.innerText = "";
    this.operator = undefined;
  }

  delete() {
    currentDisplay.innerText = currentDisplay.innerHTML.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && currentDisplay.innerText.includes(".")) return;
    currentDisplay.innerText = currentDisplay.innerText + number;
  }

  chooseOperation(operation) {
    if (this.currentDisplay === "") return;
    if (this.lastDisplay !== "") {
      this.compute();
    }
    this.operation = operation;
    this.lastDisplay.innerText = this.currentDisplay.innerText;
    this.currentDisplay.innerText = "";
  }

  compute() {
    let computation;
    const last = parseFloat(this.lastDisplay.innerText);
    const current = parseFloat(this.currentDisplay.innerText);
    if (isNaN(last) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = last + current;
        break;
      case "-":
        computation = last - current;
        break;
      case "÷":
        computation = last / current;
        break;
      case "×":
        computation = last * current;
        break;
      default:
        return;
    }
    this.currentDisplay.innerText = computation;
    this.operation = undefined;
    this.lastDisplay = lastDisplay;
  }
}

const allNumbers = document.querySelectorAll(".numbers");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");
let operator = document.querySelectorAll("[data-operator]");
const numbers = document.querySelectorAll("[data-number]");
let currentDisplay = document.querySelector("[data-current-screen]");
let lastDisplay = document.querySelector("[data-last-screen]");
const equal = document.querySelector("#equal-btn");
const dot = document.querySelector("#dot-btn");
const calculator = new Calculator(lastDisplay, currentDisplay);

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
  });
});

operator.forEach((operation) => {
  operation.addEventListener("click", () => {
    calculator.chooseOperation(operation.innerText);
  });
});

clearBtn.addEventListener("click", () => {
  calculator.clear();
});

equal.addEventListener("click", () => {
  calculator.compute();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
});
