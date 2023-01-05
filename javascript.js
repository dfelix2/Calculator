
const userChoiceDisplay = document.createElement('h1');
const possibleChoices = document.querySelectorAll('button');
const display = document.getElementById('output')

const calculatorGrid = document.getElementById('calculatorGrid');
calculatorGrid.append(userChoiceDisplay);

let userChoice;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.innerText;
    display.textContent = userChoice;
}))

function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

let operator = {
    '+': function (a, b) {return a + b; },
    '-': function (a, b) {return a - b; },
    '*': function (a, b) {return a * b; },
    '/': function (a, b) {return a / b; }
},
  operate = function(a, b, sign){
    if( sign in operator) {
        return operator[sign](a, b);
    }
};

function calculate(userChoiceA, userChoiceB, sign){
    userChoiceA = userChoice;
    userChoiceB = userChoice;
    sign = userChoice;
    console.log(operate(userChoiceA, userChoiceB, sign));
}
 console.log(operate(1, 2, '-'));
