
// function processData(number, callback) {
//     let result = number + 5
//     callback(result)
// }
    // all the below does is change the name of "callback" to "log result"
// function logResult(result) {     
//     console.log(`Processed result: ${result}`);
// }

// processData(10, logResult)

    // **Before: we did --

// BigInt.addEventListener("click", doMath)

// function doMath() {

// }


// ---


// function double(number) {
//     console.log (number * 2)
// }

// const doubleArrow = (number) => console.log(number * 2)

// double(12)
// doubleArrow(12)

// const calculateAverage = (grades) => {
//     let amountOfGrades = grades.length
//     let total = 0
//     console.log(grades);
//     for (let i = 0; i < grades.length; i++) {
//         let currentGrade = grades[i]
//         console.log(currentGrade);
//         total += currentGrade
//     }
//     console.log(total / amountOfGrades);
// }

// calculateAverage([10, 70, 50, 79, 90])


// ---


    // map transforms an array into another array

// const doubled = (numbers) => {
//     const numbersDoubled = numbers.map((num) => num * 2);
//     console.log(numbersDoubled);
// }

// doubled ([1, 30, 20, 4, 10, 30, 26])

    // filter also returns an array

// const logEvens = (nums) => {
//     const evens = nums.filter((num) => num % 2 === 0);
//     console.log(evens);
// }

// logEvens([1, 30, 20, 4, 10, 30, 26, 3, 9, 27])

    // forEach does not return an array it just reads over it

// const readNumbers = (nums) => nums.forEach((num) => 
//     console.log(num))

// readNumbers([1, 30, 20, 4, 10, 30, 26, 3, 9, 27])


// ---

    // function is first parameter, second parameter is ms


// const iTake5Seconds = () => {
// setTimeout(() => {
//     console.log(`This message is logged after 5 seconds.`);

// }, 5000)
// }

// iTake5Seconds()


// const countDown = (initialCount, seconds) => {
    
//     setInterval(() => {
//         initialCount--
//         console.log(initialCount);
//     }, seconds)
    
// }

// countDown(20, 2000)