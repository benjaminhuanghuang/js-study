Promise.resolve("Successful").then((result) => console.log(result));
// Successful

Promise.reject("Not successful").then(
  () => {
    /*Empty Callback if Promise is fulfilled*/
  },
  (reason) => console.error(reason)
);
