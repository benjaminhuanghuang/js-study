function cancellablePromise(executor) {
  let cancel;

  var res = new Promise(function (fulfill, reject) {
    let handler;
    function onCancel(cb) {
      handler = cb;
    }
    cancel = function cancel() {
      fulfill(Promise.pending()); // adopt a forever pending state
      if (typeof handler === "function") handler();
    };
    executor(fulfill, reject, onCancel);
  });

  res.cancel = cancel;

  return res;
}

class cancelablePromise {
  constructor(promise) {
    this.p = new Promise((resolve, reject) => {
      promise.then((val) => {
        if (this.isCanceld) reject(val);
        else resolve(val);
      });
      promise.catch((err) => {
        if (this.isCanceld) reject({ isCanceld: true });
        else reject(err);
      });
      this.isCanceld = false;
    });
  }
  
  then(onSuccess, onReject) {
    this.p.then(onSuccess, onReject);
  }

  cancel() {
    this.isCanceld = true;
  }
}
