        
        // **Exercise 1: Using Map To Transform An Array

// const squared = (numbers) => {
//         const squared = numbers.map((number) => (number ** 2));
//         console.log(squared);
// }

// squared([1, 2, 3, 4, 5]);


        // **Exercise 2: Filtering & Mapping Arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // First Filter Out Even Numbers, Then Double Them
const result = numbers.filter(num => num % 2 === 0).map(num => num * 2);
console.log(result);

