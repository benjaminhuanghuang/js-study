let obj = {};

console.log(obj.__proto__ === Object.prototype); // true
// obj.toString === obj.__proto__.toString == Object.prototype.toString

let arr = [1, 2, 3];

// it inherits from Array.prototype?
console.log( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
console.log( arr.__proto__.__proto__.__proto__ ); // null