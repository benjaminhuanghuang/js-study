# Programming with Asynchronous with Callbacks

synchronous code is executed only in the main program flow,
asynchronous code is instead moved over to execute in parallel. This means that the statements are executed simultaneously.

Take the XMLHttpRequest as a sample, the request gets sent off, and while the parser is waiting for a response, the main program flow moves on to execute other code, like responding to user interactions

Another common situation where asynchronous flow is useful is setting a timer using something like set timeout. The timer starts, and while it's counting down, the main program flow can go on to execute other code.

## Synchronous vs Asynchronous

Synchronous:
- One statement at a time
- Statements executed in order
- Blocking: Each statement waits for the previous one to finish

Asynchronous:
JavaScript has only a single thread, but it does have a mechanism that allows some processes to execute in parallel while other things are going on.
- Multiple statements at the same time
- Statements executed in parallel/simultaneously
- Non-blocking: Statements can run independently of each other

## Callbacks

```js
function get(url, onSuccess, onError) {
  httpRequest.open('GET', url);
  httpRequest.onload = function() {
    if(httpRequest.status === 200) {
      onSuccess(httpRequest.responseText);    // callback
    } else {
      onError('Error: ' + httpRequest.status);
    }
  };
  httpRequest.send();
}
```
