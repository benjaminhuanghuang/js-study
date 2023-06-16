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


Update nested callback code:
```
fetchResource(url)
  .then(handleResult, failureCallback)
  .then(handleNewResult, failureCallback)
  .then(handleAnotherResult, failureCallback);
```
## Handle Errors in a Promise
You can also use the .catch() method in a chain of promises. It catches the first error it encounters in the chain.


Update the code using .catch() method:
```
fetchResource(url)
  .then(handleResult)
  .then(handleNewResult)
  .then(handleAnotherResult)
  .catch(failureCallback);
```



## Handle Many Promises at Once
```
Promise.all()
Promise.race()
Promise.any()
Promise.allSettled()
```
