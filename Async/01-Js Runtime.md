# Javascript 

JavaScript can only handle a single task at a time

Then there is a long running task like network request, timer, the entire call stack will be blocked until the task is done.

## Main concept

- Call stack

- Event loop
Check the call stack, if nothing is running then move the first available task from task queue to call stack 

- Task Queue / Callback Queue
Holds the web API callback and event handlers to get executed at some point later

- Micro-task queue
Used by promise handler, async function body after await, queueMicrotask(()=>{}), new MutationObserve(()=>{})

The Event loop prioritize the micro-task queue than the task queue


## Scenario
###  web API callback 1
```js
navigator.geolocation.getCurrentPosition(
    position => console.log(position), 
    error => console.error(error)
)
```
The getCurrentPosition() will push the callback Task queue when the async task completes.
Event loop will move the callback to call task

### web API callback 2: timer
```js
setTimeout(()=>{
    console.log('2000ms Done'),
}, 2000);        // register a callback    

setTimeout(()=>{
    console.log('100 ms Done'),
}, 100)         // register a callback
```
The delay is the moment of the task gets moved to task queue not the call stack
If the call stack is still full with other tasks when the "delay" it reached, the callback is still have to wait in the task queue.

### promise based api
```js
fetch('https://dataapi/')
    .then(res => console.log(res))

```
The fetch() created a promise object.
then() create a promise reaction record.

res => console.log(res) will be push into micro-task queue

## Quiz
```js

Promise.resolve().then(() => console.log('1'));  // create a microtask

setTimeout(() => console.log('2'), 10);  // create a task in the task queue

queueMicrotask(() => {
    console.log('3');
    queueMicrotask(() => console.log('4'));
});

console.log('5');  // executed immediately 

5
1
3
4
2
```

## Reference
JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue
https://www.youtube.com/watch?v=eiC58R16hb8



