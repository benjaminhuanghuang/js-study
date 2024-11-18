/*

The JavaScript Runtime actually has these two queues—the 
Callback (or Macrotask) Queue and the Job (or Microtask) Queue. 

Shortly before the event loop starts calling the functions in the Callback Queue, 
it calls `all the instructions` on the Job Queue. 
The callback of a promise stays in the Job Queue so the event loop calls it first.

*/
Promise.resolve("This is a resolved value").then(console.log);
setTimeout(console.log, 0, "This is a value after the timeout");
console.log("This is a normal log");
