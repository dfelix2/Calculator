let currentNumber = "";
let previousNumber = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const equal = document.querySelector(".equals");
equal.addEventListener("click", () => {
    if(currentNumber != "" && previousNumber != ""){
        compute();
    }
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    addDecimal();
  });


const clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalculator);


const numberButtons = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");




numberButtons.forEach((btn) => {btn.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
});
});

function handleNumber(number){
    if (previousNumber !== "" && currentNumber !== "" && operator === "") {
        previousNumber = "";
        currentDisplayNumber.textContent = currentNumber;
      }


    if (currentNumber.length <= 11) {
        currentNumber += number;
        currentDisplayNumber.textContent = currentNumber;
    }
}


operators.forEach((btn) => {btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
});
});

function handleOperator(op){
    if (previousNumber === "") {
        previousNumber = currentNumber;
        operatorCheck(op);
      } else if (currentNumber === "") {
        operatorCheck(op);
      } else {
        compute();
        operator = op;
        currentDisplayNumber.textContent = "0";
        previousDisplayNumber.textContent = previousNumber + " " + operator;
      }
    }

function operatorCheck(text){
    operator = text;
    previousDisplayNumber.textContent = previousNumber + " " + operator;
    currentDisplayNumber.textContent = "0";
    currentNumber = "";
}

function compute(){
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if (operator === "+") {
        previousNumber += currentNumber;
    } else if (operator === "-") {
        previousNumber -= currentNumber;

    }else if (operator === "x") {
        previousNumber *= currentNumber;

    }else if(operator === "/"){
        if (currentNumber <= 0){
            previousNumber = "Error";
            displayResults();
            return;
        }
        previousNumber /= currentNumber;
    }
previousNumber = roundNumber(previousNumber);
previousNumber = previousNumber.toString();
displayResults();
}

function roundNumber(num){
    return Math.round(num *100000) / 100000;
}

function displayResults() {

if(previousNumber.length <= 11){
    currentDisplayNumber.textContent = previousNumber;
} else {
    currentDisplayNumber.textContent = previousNumber.slice(0,11) + "...";
}
previousDisplayNumber.textContent = "";
operator = "";
currentNumber = "";
}

function clearCalculator() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = "";
}

function addDecimal() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    currentDisplayNumber.textContent = currentNumber;
  }
}
