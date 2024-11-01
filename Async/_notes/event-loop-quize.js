Promise.resolve().then(() => console.log('1'));  // create a microtask

setTimeout(() => console.log('2'), 10);  // create a task in the task queue

queueMicrotask(() => {
    console.log('3');
    queueMicrotask(() => console.log('4'));
});

console.log('5'); // executed immediately 


/*

https://www.youtube.com/watch?v=eiC58R16hb8

5
1
3
4
2

*/