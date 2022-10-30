/*


*/

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executer) {
    try {
      executer(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }
  status = PENDING;
  value = undefined;
  reason = undefined;
  successCallback = [];
  failCallback = [];

  // 使this指向promise对象
  resolve = (value) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = FULFILLED;
    this.value = value;
    while (this.successCallback.length > 0) {
      this.successCallback.shift()(this.value);
    }
  };

  reject = (reason) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = REJECTED;
    this.reason = reason;
    while (this.failCallback.length > 0) {
      this.failCallback.shift()(this.reason);
    }
  };

  then_without_chaining_call(successCallback, failCallback) {
    if (this.status === FULFILLED) {
      successCallback(this.value);
    } else if (this.status === REJECTED) {
      failCallback(this.reason);
    } else {
      // pending... 处理异步情况
      this.successCallback = successCallback;
      this.failCallback = failCallback;
    }
  }

  then(successCallback, failCallback) {
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          // 为了可以拿到promise2
          try{
          let x = successCallback(this.value);
          resovlePromise(promise2, x, resolve, reject);
          }catch(e) {
            reject(e)
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          // 为了可以拿到promise2
          try{
          let x = failCallback(this.value);
          resovlePromise(promise2, x, resolve, reject);
          }catch(e) {
            reject(e)
          }
        }, 0);
      } else {
        // pending... 处理异步情况
        this.successCallback = successCallback;
        this.failCallback = failCallback;
      }
    });
    return promise2;
  }

  static all(array) {
    let result =[];

    
    return new MyPromise((resolve, reject) =>{
      function addData(key, value) {
        result[key] = value;
      }
      for(let i =0; i< array.length; i++){
        let current =array[i];
        if(current instanceof MyPromise){
          current.then((value)=> addData(i, value), (reason)=>reject(reason))
        }
        else{
          addData(i, array[i])
        }
      }
      resolve(result);
    })
  }
}

function resovlePromise(x, resolve, reject) {
  if (x instanceof MyPromise) {
    // x.then(
    //   (value) => {
    //     resolve(value);
    //   },
    //   (reson) => {
    //     reject(reson);
    //   }
    // );
    x.then(resolve, reject);
  } else {
    // normal value
    resolve(x);
  }
}

module.exports = MyPromise;
