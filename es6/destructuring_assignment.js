// List match  
var [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(b);   // 2
console.log(rest); // [3, 4, 5]

// Object matching
var o = {p:4, q:true};
var {p, q} = o;
console.log(q);   //true

// Function arguments
const toDecimal = ({base = 2, number}) => {
    return parseInt(number, base);
}

console.log(toDecimal({base:2, number:101}));