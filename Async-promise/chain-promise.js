const promise = Promise.resolve(5);

promise
  .then((value) => {
    console.log(value); // Output: 5
    return value + 5;  // Returns a new value (10), it will be pass to next promise
  })
  .then((newValue) => {
    console.log(newValue); // Output: 10
    return newValue + 10; // Returns a new value (20)
  })
  .then((finalValue) => {
    console.log(finalValue); // Output: 20
  });
