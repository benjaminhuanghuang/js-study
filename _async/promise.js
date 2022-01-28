var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (ok) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});


// then()有两个参数，一个成功案例的回调，另一个是失败案例的回调。
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});