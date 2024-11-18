console.log("Start");

// schedules a macrotask but doesn’t execute it immediately.
setTimeout(() => console.log("Macrotask: setTimeout"), 0);

// Promise.resolve().then adds a microtask to the queue.
Promise.resolve()
  .then(() => console.log("Microtask: Promise 1"))
  .then(() => console.log("Microtask: Promise 2"));

console.log("End");



/*
Output:

    Start
    End
    Microtask: Promise 1
    Microtask: Promise 2
    Macrotask: setTimeout
*/