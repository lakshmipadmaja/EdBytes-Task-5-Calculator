const firstInput = document.getElementById("a");
const secondInput = document.getElementById("b");
const resultElement = document.getElementById("result");
const operations = document.getElementById("operations");
const clearButton = document.getElementById("clear");

// Each arithmetic operation has its own function.
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero. Please enter a non-zero second number.");
  }
  return a / b;
}

function showResult(message, isError = false) {
  resultElement.textContent = message;
  resultElement.classList.toggle("error", isError);
}

function calculate(operation) {
  const firstValue = firstInput.value.trim();
  const secondValue = secondInput.value.trim();

  if (firstValue === "" || secondValue === "") {
    showResult("Please enter both numbers before calculating.", true);
    return;
  }

  const a = Number(firstValue);
  const b = Number(secondValue);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    showResult("Invalid input. Please enter valid numbers.", true);
    return;
  }

  try {
    let answer;

    switch (operation) {
      case "+":
        answer = add(a, b);
        break;
      case "-":
        answer = subtract(a, b);
        break;
      case "*":
        answer = multiply(a, b);
        break;
      case "/":
        answer = divide(a, b);
        break;
      default:
        showResult("Please choose a valid operation.", true);
        return;
    }

    if (!Number.isFinite(answer)) {
      showResult("The result is outside the supported number range.", true);
      return;
    }

    showResult(`Answer: ${Number(answer.toPrecision(12))}`);
  } catch (error) {
    showResult(error.message, true);
  }
}

operations.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-op]");
  if (!button) return;
  calculate(button.dataset.op);
});

clearButton.addEventListener("click", () => {
  firstInput.value = "";
  secondInput.value = "";
  showResult("Your answer will appear here.");
  firstInput.focus();
});
