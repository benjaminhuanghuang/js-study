
#

## reference
- https://juejin.cn/post/6844903760334946312


The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.

```
unction debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;
	    
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
	
    clearTimeout(timeout); // cancel the last call

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
};
```

## Library
- jQuery
```
$.debounce(300, saveInput);
```
- lodash
```
  _.debounce(saveInput, 300);
```
- underscore
```
	_.debounce(saveInput, 300);
```

## debounce与throttle
debounce 有个很重要的特性，就是在规定的等待时长内如果再次调用函数，会取消上一次函数执行。

throttle 也有一个等待时长，每隔一段这个等待时长，函数必须执行一次。如果在这个等待时长内，当前延迟执行没有完成，它会忽略接下来调用该函数的请求，不会去取消上一个定时器。所以 throttle 适用于 scroll, mousemove 等事件。


```
function throttle(fn, wait) {
    let callback = fn;    
    let timerId = null;

    // 是否是第一次执行
    let firstInvoke = true;

    function throttled() {
        let context = this;
        let args = arguments;           

        // 如果是第一次触发，直接执行
        if (firstInvoke) {
            callback.apply(context, args);
            firstInvoke = false;
            return ;
        }

        // 如果定时器已存在，直接返回。        
        if (timerId) {
            return ;
        }

        timerId = setTimeout(function() {  
            // 注意这里 将 clearTimeout 放到 内部来执行了
            clearTimeout(timerId);
            timerId = null;

            callback.apply(context, args);
        }, wait);
    }

    // 返回一个闭包
    return throttled;
}

// test
let resizeFun = function(e) {
    console.log('resize');
};
window.addEventListener('resize', throttle(resizeFun, 500));
```
