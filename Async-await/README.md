# async-await [ES 2017]

```js
  async function getZhiHuColumn(id) {
    return await fetch(url);   // Return a promise
  }
```
await keyword 接受一个promise, 把promise resolve的结果赋给 "=" 左边的变量
如果promise reject, await 会 throw exception

async function 会返回一个promise, 因此async function can be used in promise chain



## Reference
-[玩转异步 JS ：async/await 简明教程](https://www.bilibili.com/video/BV1RJ411N7cU)