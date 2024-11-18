/*
Object-oriented Programming in JavaScript: Made Super Simple | Mosh
31:09: Value vs Reference Types
https://www.youtube.com/watch?v=PFmuCDHHpwk
*/
let number = 10;
function increase(n) {
  n++;
}

increase(number);   // copy value

console.log(number);   // still 10



let obj = {value: 10};
function increaseObj(o) {
  o.value++;
}

increaseObj(obj);   // pass by reference

console.log(obj.value);   // chaged to 11