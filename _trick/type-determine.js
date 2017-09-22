var bar = null;
console.log(typeof bar === 'object');   // is true

var bar = [1];
console.log(typeof bar === 'object');   // is true

console.log(toString(bar));   // is true


console.log(typeof NaN === "number");  // logs "true"
console.log(NaN === NaN);  // logs "false"

//Numbers in JavaScript are all treated with floating point precision
console.log(0.1 + 0.2);     //0.300000000000004
console.log(0.1 + 0.2 == 0.3);    //false
console.log(Math.abs(0.1 + 0.2 - 0.3) <= 1e-6);
console.log((0.1 + 0.2).toFixed(1) === 0.3.toFixed(1))