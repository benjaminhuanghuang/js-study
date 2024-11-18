const promises = Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 4000)),  // 
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(console.log); // Error: Whoops!

promises.then(results =>{
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
  
})

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(console.log); // Error: Whoops!

/*
  Two interesting things:
  1. Whoops comes before the successful results
  2. If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
*/