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
    if (currentDisplay.textContent.length > 14) return;
    if (currentDisplay.textContent === "0") return;
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
let currentDisplay = document.querySelector("#current-screen");
let lastDisplay = document.querySelector("#last-screen");
const equal = document.querySelector("#equal-btn");
const dot = document.querySelector("#dot-btn");
const calculator = new Calculator(lastDisplay, currentDisplay);

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
  });
});
window.addEventListener("keydown", function (e) {
  const key = e.keyCode;
  switch (key) {
    case 13: {
      calculator.compute();
      console.log("enter");
      break;
    }
    case 8: {
      calculator.delete();
      break;
    }
    case 67, 27: {
      calculator.clear();
      break;
    }

    case 107: {
      calculator.chooseOperation();
      break;
    }
    case 109: {
      calculator.chooseOperation();
      break;
    }
    case 111: {
      calculator.chooseOperation();
      break;
    }
    case 106: {
      calculator.chooseOperation();
      break;
    }
    default:
      if (key >= 48 && key <= 57) calculator.appendNumber(String.fromCharCode(key));

  }

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








