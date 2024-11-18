/*

  we want many promises to execute in parallel and wait until **ALL of them are ready**

For instance, download several URLs in parallel and process the content once they are all done.
*/
const promises = Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 4000)),  // 
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).catch(console.log); // Error: Whoops!

/*
Please note that the order of the resulting array members is the same as in its source promises. 
Even though the 2nd promise takes the longest time to resolve
*/
promises.then(results =>{
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
})

