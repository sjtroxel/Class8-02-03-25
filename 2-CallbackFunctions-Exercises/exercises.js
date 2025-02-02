        
        // **Exercise 1: Basic Callback Function

function greetCustomer() {
        console.log('Your food is ready, buckeroo!!');
}

function prepareFood(callback) {
        console.log('Frying your juicy crabbypatties...');
        callback();
}

prepareFood(greetCustomer);


        // **Exercise 2: Delayed Callback with setTimeout

function requestData(callback) {
        console.log('Requesting data...');
        setTimeout(() => {
                // console.log('Data fetched successfully!');
                callback();
        }, 2000);
}

function displayData() {
        console.log('Displaying data...');
}

requestData(displayData);