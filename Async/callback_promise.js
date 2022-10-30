/*
  scenario
  second() will use the result from first()
*/
first(10, function (firstResult, err) {
  if (!err) {
    // call second() if there is no error in first()
    second(firstResult, function (secondResult, err) {
      if (!err) {
        // call third() if there is no error in second()
        third(secondResult, function (thirdResult, err) {
          if (!err) {
            console.log(thirdResult);
          }
        })
      }
    });
  }
});

function first(value, callback) {
  callback(value + 2, false);
}

function second(value, callback) {
  callback(value + 2, false);
}

function third(value, callback) {
  callback(value + 2, false);
}


/*
new Promise(executor);

The function passed to new Promise is called the executor. 

The execuor has 2 arguments resolve and reject. 

The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
*/

var promise = new Promise(function (resolve, reject) {
  resolve(2);
})

promise.then(first_promise).then(second_promise).then(third_promise).then(function(response){
  // return value from first_promise() will be passed to second_promise
  console.log(response);
});

function first_promise(value) {
  return value + 2;
}

function second_promise(value) {
  return value + 2;
}

function third_promise(value) {
  return value + 2;
}
