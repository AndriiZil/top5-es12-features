// Create a Promise.
const promise1 = new Promise((resolve, reject) => {
    // After 1 second reject the first promise.
    setTimeout(() => reject("The first promise has been rejected."), 1000);
});

// Create a Promise.
const promise2 = new Promise((resolve, reject) => {
    // After 500 miliseconds reject the second promise.
    setTimeout(() => reject("The second promise has been rejected."), 500);
});

// Try executing the Promises.
(async function () {
    try {
        const data = await Promise.any([promise1, promise2]);
        console.log(data);
    } catch (error) {
        // If all Promises gets rejected, then this try-catch block will handle
        // the aggregate errors.
        console.log("Error: ", error);
    }
})(); // Error:  [AggregateError: All promises were rejected]
