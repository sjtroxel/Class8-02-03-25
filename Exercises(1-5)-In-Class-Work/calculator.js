// GOAL: Create a calculator that has X amount of functions to be able to take 2 numbers from a user and either sum, multiply, divide, or subtract.

// user inputs x 2
// buttons for the operators
// connect html elements to javascript

// function to doMath
// math logic
// store answer

// (GOAL: buttons need to decide operator to use)
// use addEventListener

const inputOne = document.querySelector('#inputOne')
const inputTwo = document.querySelector('#inputTwo')
const sum = document.querySelector('#sum')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const subtract = document.querySelector('#subtract')
const submit = document.querySelector('#submit')
const clear = document.querySelector('#clear')
const answerContent = document.querySelector('#answerGoesHere')

let selectedOperator = "";
    // function to doMath -- done
const doMath = () => {
    // store answer -- done
    let answer = 0;
    let num1 = Number(inputOne.value)
    let num2 = Number(inputTwo.value)
    // math logic
    switch (selectedOperator) {
    case('sum'):
        answer = num1 + num2;
        answerContent.textContent = answer
        break;
    case('multiply'):
        answer = num1 * num2;
        answerContent.textContent = answer
        break;
    case('divide'):
        answer = num1 / num2;
        answerContent.textContent = answer.toFixed(2)
        break;
    case('subtract'):
        answer = num1 - num2;
        answerContent.textContent = answer
        break;
    default:
        answerContent.textContent = 'Please select an operator.'
}
};




const sumHandler = () => {
    selectedOperator = 'sum';
   
}
const multiplyHandler = () => {
    selectedOperator = 'multiply';
    
}
const divideHandler = () => {
    selectedOperator = 'divide';
  
}
const subtractHandler = () => {
    selectedOperator = 'subtract';
    
}

sum.addEventListener("click", sumHandler)
multiply.addEventListener("click", multiplyHandler)
divide.addEventListener("click", divideHandler)
subtract.addEventListener("click", subtractHandler)

submit.addEventListener("click", doMath)
// clear.addEventListener("click", clear)

// somewhere to display answer