        
        // **Exercise 1: Write a function applyDiscount that takes an array of prices and a callback function. The callback should apply a discount to each price. After the discount is applied, log the final prices.



// const applyDiscount = (prices, discount, callback) => {     
//         const appliedDiscount = prices.map(price => price - (price * discount));
//         console.log(appliedDiscount);
//         callback(appliedDiscount);
//         }       
        
// const logData = (appliedDiscount)  => {
//         console.log(`This is the result: ${appliedDiscount}`)
// }     
// applyDiscount([10, 15, 20], 0.15, logData);


        //Exercise 2: Write a function squareAndPrint that takes a number and uses an arrow function to square the number and log the result.



// const squareAndPrintArrow = (numbers) => {
//         const squared = numbers.map((number) => (number ** 2));
//         console.log(squared);
// }

// squareAndPrintArrow([2, 4, 6, 8]);


        //Exercise 3: Use map to take an array of strings and return an array where each string is reversed.



// const reversedArray = (numbers) => {
//         let reverse = numbers.reverse()
//         console.log(reverse);
// }

// reversedArray([10, 20, 30, 40, 500])


        //Exercise 4: Use filter to return only the odd numbers from an array of integers.

// const numbers = [2, 3, 4, 5, 6, 7]

// const odds = numbers.filter(num => num % 2 ==! 0)

// console.log(odds);


        //Exercise 5: Write a function that uses setTimeout to log "Task completed!" after a 5-second delay. Additionally, set up a setInterval to log "Still waiting..." every 2 seconds.

const timing = () => {
setTimeout(() => {
    console.log(`Task completed!`);

}, 5000);
setInterval(() => {
        console.log("Still waiting...");
    }, 2000)
}

timing()






    
