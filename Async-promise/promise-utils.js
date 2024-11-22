/*
    not Promises/A+ compliant
    ES6 Promise polyfill
*/

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.finally = function (onFinally) {
  return this.then(
    (value) => Promise.resolve(onFinally()).then(() => value),
    (err) =>
      Promise.resolve(onFinally()).then(() => {
        throw err;
      })
  );
};

// is a object with a then method
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}

Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (isPromiseLike(value))
    return new Promise((resolve, reject) => value.then(resolve, reject));
  // value is a normal data
  return new Promise((resolve) => resolve(value));
};

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => reject(reason));
};
