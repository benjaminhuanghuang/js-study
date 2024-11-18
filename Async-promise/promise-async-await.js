// A simple Promise that resolves after 2 seconds
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
});

/*
`async` function to handle the Promise with `await`
The await keyword is used inside async functions to pause the execution of code until the Promise is resolved or rejected. 
await can only be used inside functions that are marked as async.
*/
async function example() {
  console.log("Waiting for Promise...");
  const result = await myPromise; // Waits until the Promise is resolved
  console.log(result); // Output: 'Promise Resolved'

  return 100; // This value will be passed to the then() method
}

example();

/*
The return value of an async function is always a Promise, regardless of what is returned inside the function.
*/
example().then((value) => {
  console.log(value); // Output: undefined (because no explicit return)
});
