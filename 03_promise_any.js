// Create a Promise.
const promise1 = new Promise((resolve, reject) => {
    // After 2 seconds resolve the first promise.
    setTimeout(() => resolve("The first promise has been resolved."), 2000);
});

// Create a Promise.
const promise2 = new Promise((resolve, reject) => {
    // After 1 second resolve the second promise.
    setTimeout(() => resolve("The second promise has been resolved."), 1000);
});

// Create a Promise.
const promise3 = new Promise((resolve, reject) => {
    // After 3 seconds resolve the third promise.
    setTimeout(() => resolve("The third promise has been resolved."), 3000);
});

(async function () {
    const data = await Promise.any([promise1, promise2, promise3]);
    // Print the data returned from the first resolved Promise.
    console.log(data);
    // The above will print: The second promise has been resolved.
})();
