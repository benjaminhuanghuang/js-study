const MyPromise = require('./MyPromise');


/*-------------------------------

*/

let promise = new MyPromise((resolve, reject) => {
  resolve('Hello')
});

promise.then(
  (value) => {
    console.log(value);
    return 100;
  },
  (error) => {
    console.log(error);
  }
).then(value=>{
  console.log(value)
});
