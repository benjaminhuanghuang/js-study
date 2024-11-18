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

