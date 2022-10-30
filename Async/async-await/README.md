## Promise vs Async
Promise
···
const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })

makeRequest()
```

Async
```
const makeRequest = async() => {
        console.log(await getJSON)
        return "done"
}

makeRequest()
```

任何一个async函数都会隐式返回一个promise，并且promise resolve 的值就是 return 返回的值 (例子中是”done”)

Promise 中不能自定义使用 try/catch 进行错误捕获，但是在 Async/await 中可以像处理同步代码处理错误

