        // **Basic Callback Function

// function greetUser() {
//         console.log('Hi-dee ho!');
// }

// function processUserData(callback) {
//         console.log('Processing data...');
//         callback();
// }

// processUserData(greetUser);

        // ** (Realistic) Delayed-Callback With setTimeout

// function fetchData(callback) {
//         console.log('Fetching data...');
//         setTimeout(() => {
//                 console.log('Data fetched successfully!');
//                 callback();
//         }, 2000);
// }

// function displayData() {
//         console.log('Displaying fetched data...');
// }

// fetchData(displayData);