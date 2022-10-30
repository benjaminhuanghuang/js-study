# Javascript Asynchronous

## Callback

## Promise  (ES6, ECMAScript 2015)
- promise 基本用法
构造promise时传入的执行器函数会被立即同步执行 

构造promise的函数接受两个参数 resolve, reject. 这两个参数都是函数

异步操作的结果会传递给 resovel, resole会修改promise的状态

异步操作的错误会传递给 reject, reject会修改promise的状态

然后在then中注册 onFulfile, onReject 的回掉函数

- promise 封装 ajax

- promise chain
```
  queryDatabase({username: 'Tom'})
    .then((user)=>{
      const image_url = user.profile_img_url;
      getImageByURL(`someServer/q=${image_url}`)
        .then((image)=>transformImage(image))
        .then(()=>sendEmail(user.email))
    })
    .then(()=>{ logTask();})
    .catch(()=>{ handleError(); })
```

## Generator (ES6)
当调用Generator函数时，并非立即执行该函数，而是返回一个generator。每当调用Generator对象的.next() 方法时，函数将运行到下一个 yield 表达式，返回表达式结果并暂停自身。
当抵达生Generator的末尾时，返回结果中 done 的值为 true，value 的值为 undefined。
```
function* example() {
  yield 1;
  yield 2;
  yield 3;
}
var iter=example();
iter.next();//{value:1，done:false}
iter.next();//{value:2，done:false}
iter.next();//{value:3，done:false}
iter.next();//{value:undefined，done:true}
```
## Async (ES8 /ES2017)
The body of an async function is always wrapped in a new Promise.
```
async function fn() {
  return 'hello';
}

as

function fn() {
  return Promise.resolve('hello');
}
```
Async functions pause at each **await** expression.
An await acts on an expression. When the expression is a promise, the evaluation of the async function halts until the promise is resolved.



```
  aysnc function myTask(){
    try{
      const user = await queryDatabase({username: 'tom'})
      const image_url = user.profile_img_url;
      const image = await getImageByURL(`someServer/q=${image_url}`);
      cosnt transformedImage = await transformImage(image);
      await sendEmail(user.email);
      await logTask('.....');
    }
    catch(err){

    }
  }
```

## Reference
- Asynchronous JavaScript: From Callback Hell to Async and Await
  - https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8

- Async-Await ≈ Generators + Promises
  - https://hackernoon.com/async-await-generators-promises-51f1a6ceede2


-[JavaScript: Async](https://www.linkedin.com/learning/javascript-async/)
