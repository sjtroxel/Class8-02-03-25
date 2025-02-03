        
        // **Exercise 1: Writing an Arrow Function

const square = x => x * x;

console.log(square(5));


        // **Exercise 2: Converting a Regular Function to an Arrow Function

const multiply = function (a, b) {
        return a * b;
}
const multiplyArrow = (a, b) => a * b;

console.log(multiply (3, 4));
console.log(multiplyArrow (3, 4));