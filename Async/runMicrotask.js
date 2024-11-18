function runMicrotask(callback) {
  Promise.resolve().then(callback);
}

console.log("Start");
runMicrotask(() => console.log("Microtask running..."));
console.log("End");

console.log();


/*
JavaScript also provides the queueMicrotask function to explicitly queue a microtask.
*/

console.log("Start");

queueMicrotask(() => {
  console.log("Microtask: queued");
});

console.log("End");
/*
output:

Start
End
Microtask running...

*/
