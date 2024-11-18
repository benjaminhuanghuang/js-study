# resolve() vs then()


## resolve()
Promise.resolve(value) is a method that creates a `resolved Promise`. 
If the value is a Promise, it returns that same Promise (does not wrap it again).
If the value is not a Promise, it wraps the value into a resolved Promise.

It is often used to convert a value into a Promise that resolves immediately or to ensure a function always returns a Promise.

```js
// It wraps the value in a Promise that resolves immediately.
const promise = Promise.resolve(42);
promise.then((value) => console.log(value)); // Logs: 42
```

It simply returns that Promise without creating a new one.
```js
const anotherPromise = Promise.resolve(42);
const samePromise = Promise.resolve(anotherPromise);
console.log(anotherPromise === samePromise); // Logs: true
```

## then()
then() is used to handle the result of a Promise once it has been resolved (fulfilled) or rejected.
.then() always returns a new Promise, allowing chaining of .then() calls.


Promise.resolve().then() schedules a microtask that executes after the current JavaScript execution context is 
finished but before any macrotasks (e.g., setTimeout) are executed.

### What does .then() return

```js
promise.then(onFulfilled, onRejected);
```
onFulfilled (optional): A function that is executed if the Promise is resolved successfully. It receives the resolved value as an argument.
onRejected (optional): A function that is executed if the Promise is rejected. It receives the error as an argument.

The then() method always returns a `new Promise`, regardless of whether the original Promise was fulfilled or rejected. 

If the onFulfilled or onRejected handler returns a value (not a Promise), that value is automatically wrapped in a resolved Promise.

If the handler returns a Promise, the returned Promise will inherit the status of that Promise (pending, resolved, or rejected).

### status of the promise returned by .then()

Initially, when the Promise returned by .then() is created, it starts in the pending state.

Fulfilled (Resolved)

The Promise transitions to the fulfilled state when the handler in .then() (the onFulfilled callback) returns a value or does not throw any error.
If the handler returns a value (non-Promise), the returned Promise is immediately resolved with that value.
If the handler returns a Promise, the returned Promise will adopt the state (fulfilled or rejected) of that inner Promise.

Rejected

The Promise transitions to the rejected state when the handler in .then() (the onRejected callback) throws an error or returns a rejected Promise.
If the onFulfilled handler throws an error, the returned Promise will be rejected.
If the handler returns a rejected Promise, the returned Promise will adopt the rejection state of the inner Promise.


