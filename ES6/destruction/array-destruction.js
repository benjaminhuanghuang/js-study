
//Sample 1
const pizzaSizes = ["slice", "half-pie", "full-pie"];
const [slice, halfPie, fullPie] = pizzaSizes;


// Sample 2
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

// == Ignore value
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;



// == Default value
var a, b;
[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

// == Rest part
var a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30,40,50]

// Swapping variables
var a = 1;
var b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

