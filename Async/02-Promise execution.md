# Promise
When promise constructor is executed, a new promise object is created in memory
The promise object as some fields like
- promiseState
- promiseResult
- promiseFulfillReactions
- promiseRejectReactions
- promiseIsHandled


call resolve(val), promiseState is set to fulfilled, the promiseResult is set to val.

call reject(val), promiseState is set to rejected, the promiseResult is set to val.

.then()  will create promise reaction record, 




## Quiz
```js
new Promise((resolve)=>{
    setTimeout(()=> resolve('Done'), 100);
})
.then(result => console.log(result))
```


```js
new Promise((resolve, reject) => {
    resolve(1)
})
.then(result => result * 2)
.then(result => result * 3)
.then(result => console.log(result))
```





## Reference
JavaScript Visualized - Promise Execution
https://www.youtube.com/watch?v=Xs1EMmBLpn4
