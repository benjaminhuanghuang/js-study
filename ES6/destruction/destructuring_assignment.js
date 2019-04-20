
// List match  
var [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(b);   // 2
console.log(rest); // [3, 4, 5]

// Object matching. field name were used for matching
let person = {name:"Tom", age:20};

var {a, b} = person;
console.log(b);   //undefined

var {name, age} = person;
console.log(age);   //20

var {name} = person;
console.log(name);   //Tom



// Function arguments
const toDecimal = ({base = 2, number}) => {
    return parseInt(number, base);
}


console.log(toDecimal({base:2, number:101}));