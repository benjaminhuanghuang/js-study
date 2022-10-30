
Promise的构造函数接收一个参数：函数，并且这个函数需要传入两个参数：
resolve ：异步操作执行成功后的回调函数
reject：异步操作执行失败后的回调函数

创建 Promise 实例时传入的函数会被赋予一个函数类型的参数，即 resolve，它接收一个参数 value，代表异步操作返回的结果，当异步操作执行成功后，会调用resolve方法，这时候其实真正执行的操作是将 callbacks 队列中的回调一一执行；


Promise 必须为以下三种状态之一: Pending, Fulfilled, Rejected

一旦Promise 被 resolve 或 reject，不能再迁移至其他任何状态（即状态 immutable）。


getData()方法返回一个promise，使用者可以通过promise的then方法注册(注意注册这个词)在promise异步操作成功时执行的回调。
```
function getData() {
    return new Promise(function(resolve) {
        //异步请求
        http.get(url, function(results) {
            resolve(results.id)
        })
    })
}

const p = getData();

p.then( function(data) {
    // Use the data returned from http.get
})
```

## then() vs reslove function
```
  function Promise(fn) {
    let value = null,
    let callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

    // then() 用于把一个函数 加入到 callbacks array中
    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
    };

    // resolve() 会调用callbacks array中的所有函数
    function resolve(value) {
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }
    fn(resolve);
  }
```

## Error handling
.catch会处理整个promise链上的异常

then() 的第二个参数只能处理当前 promises

## then中的返回值
Promise对象的then()方法会返回一个全新的Promise对象

后一个then()方法就是为上一个then() 返回的 Promise对象注册callback 

前面then()方法中回调函数的返回值会作为下一个then方法回调函数的参数

如果then()方法中回调函数的返回值是一个promise，一个then方法的回调会处理这个promise

```
ajax("/api/user.js").then(
 value =>{
   return 'value';     // pass value to next then()

   return Promise.all(tasks);    // next then() will register callback to this promise
 }
).then();


```
## Promise.resolve()， Promise.reject() 
The Promise.resolve() method returns a Promise object that is resolved with a given value.

```
  Promise.resolve('Success').then(function(value) {
    console.log(value); // "Success"
  }, function(value) {
    // not called
  });
```

The Promise.reject() method returns a Promise object that is rejected with a given reason.


## Promise.all() Promise.race()