        // ** Higher-Order Functions

// Map Function:

// const numbers = [1, 2, 3, 4, 5];

        // Using Map To Double Each Number
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);

// Filter Function:

// const numbers = [1, 2, 3, 4, 5];

        // Using Filter To Get Only Even Numbers
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); 


// ** forEach Function

// const numbers = [1, 2, 3, 4, 5];

        // Using forEach To Log Each Number
// numbers.forEach(num => console.log(num));

// Combining Map & Filter

const numbers = [1, 2, 3, 4, 5];

        // First Filter Out Odd Numbers, Then Double The Even Numbers
const result = numbers.filter(num => num % 2 === 0).map(num => num * 2);
console.log(result);