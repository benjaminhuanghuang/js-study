# How Promises Work in JavaScript – A Comprehensive Beginner's Guide
https://www.freecodecamp.org/news/guide-to-javascript-promises/


## Asynchronous:
JavaScript runs asynchronous instructions in the background until they have finished processing.


## Callback
A callback is any function that is a parameter of an async function, which the async function invokes to complete its operation.

pass a callback as an argument to the async function like this:

```
function callback(result) {
  // Use the result from the Async operation
}

randomAsyncOperation((response) => callback(response));
```


Assume you had an asynchronous function that fetched data somewhere on the internet. This function should accept two callbacks, successCallback and failureCallback.
```
function SuccessCallback(result) {
  console.log("Resource found", result);
}

function failureCallback(error) {
  console.error("Ooops. Something went wrong", error);
}

fetchResource(url, successCallback, failureCallback);
```

might run into this situation if the result of the next operation depends on the result of the previous one.
```
fetchResource( url,
  function (result) {  // successCallback
    // Do something with the result
    fetchResource(
      newUrl,
      function (result) {
        // Do something with the new result
        fetchResource(
          anotherUrl,
          function (result) {
            // Do something with the new result
          },
          failureCallback
        );
      },
      failureCallback
    );
  },
  failureCallback
);
```

## Promises
Promise is an object that will produce a single value some time in the future.

If the promise is successful, it will produce a resolved value, if something goes wrong then it will produce a reason why the promise failed. 

JavaScript promises can be in one of three possible states. These states indicate the progress of the promise:
- pending: This is the default state of a defined promise
- fulfilled:  This is the state of a successful promise
- rejected: This is the state of a failed promise
- 
A promise goes from pending to fulfilled, or from pending to rejected—‘fulfilled’ and ‘rejected’ indicate the end of a promise.

The Promise constructor function takes in one parameter. 
That parameter is a function that defines when to resolve the new promise, and optionally when to reject it.
```
  const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
      resolve("Promise is fulfilled!");
    } else {
      reject("Promise failed!");
    }
  });
```
In promises, resolve is a function with an optional parameter representing the resolved value.
reject is a function with an optional parameter representing the reason why the promise failed

## Attach a Callback to a Promise

.then() method takes in two callback functions. 
The first function runs if the promise is resolved, while the second function runs if the promise is rejected.

```
const promise = new Promise((resolve, reject) => {
  const num = Math.random();
  if (num >= 0.5) {
    resolve("Promise is fulfilled!");
  } else {
    reject("Promise failed!");
  }
});

function handleResolve(value) {
  console.log(value);
}

function handleReject(reason) {
  console.error(reason);
}

promise.then(handleResolve, handleReject);
```

create an immediately resolved/rejected promise
```
Promise.resolve("Successful").then((result) => console.log(result));
// Successful

Promise.reject("Not successful").then(
  () => {
    /*Empty Callback if Promise is fulfilled*/
  },
  (reason) => console.error(reason)
);
```

Update nested callback code:
```
fetchResource(url)
  .then(handleResult, failureCallback)
  .then(handleNewResult, failureCallback)
  .then(handleAnotherResult, failureCallback);
```
## Handle Errors in a Promise
You can also use the .catch() method in a chain of promises. It catches the first error it encounters in the chain.
.catch() to check for errors in a group of promises before proceeding with further asynchronous operations.

```
fetchResource(url)
  .then(handleResult)
  .then(handleNewResult)
  .catch(failureCallback)
  // Check for Errors in the above group of promises before proceeding
  .then(handleAnotherResult);
```

Using finally() helps prevent possible code repetition in .then() and .catch(). 
It is for operations you must run whether there is an error or not.
```
fetchResource(url)
  .then(handleResult)
  .then(handleNewResult)
  .finally(onFinallyHandle);
```

## Handle Many Promises at Once
```
Promise.all()
Promise.race()
Promise.any()
Promise.allSettled()
```
Promise.all() runs all promises at the same time.
The array Promise.all() resolves with will contain the resolve values of individual promises in the input array.
If any promise in the input array was rejected, Promise.all() will return a rejected promise with a reason. 
This is why the total time it would take Promise.all() to return a value is roughly the time it would take the longest promise in the array to finish.

Promise.race() will return the promise with the shortest execution time in an array of promises.
If the promise with the shortest execution time happens to be rejected with a reason, Promise.race() returns a rejected promise and the reason why the fastest promise was rejected.


Promise.any() waits for any promise in the array to be resolved and would immediately return it as the output
If none of the promises in the array are resolved, Promise.any() returns a rejected promise.


Promise.any() and Promise.race() are similar, except that Promise.any() will return the `fastest promise to complete and be resolved`, 
while Promise.race() will return the `fastest promise` to complete and does not care if it is resolved or not.

Promise.allSettled() return after all the input promises are settled. It does not care if any individual promise in the input array rejected. 
The difference is Promise.all() can only be successful if all the promises in the input are resolved, 
while Promise.allSettled() does not care about the status of the input promises.


## Job Queue
```
Promise.resolve("This is a resolved value").then(console.log);
setTimeout(console.log, 0, "This is a value after the timeout");
console.log("This is a normal log");
```

The output of the above code is:
```
This is a normal log
This is a resolved value
This is a value after the timeout
```
Why does the output from the promise come next? 

Well, the simple answer is that a `promise is faster than any other async` implementation in JavaScript. 

The JavaScript Runtime actually has these two queues—the Callback (or Macrotask) Queue and the Job (or Microtask) Queue. Shortly before the event loop starts calling the functions in the Callback Queue, it calls `all the instructions` on the Job Queue. The callback of a promise stays in the Job Queue so the event loop calls it first.
![](./event-loop.gif)
