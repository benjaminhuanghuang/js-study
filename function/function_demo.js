/*
https://medium.com/appsflyer/unlocking-the-javascript-code-interview-an-interviewer-perspective-f4fe06246b29
*/
var a = Person('a');
var b = new Person('b');
var c = Person;
function Person(name) {
  this.first_name = name;
}
//console.log("a is " + a);   // a is undefined
//console.log(a.first_name);  // type error
console.log("b is " + b);     // b is object
console.log(b.first_name);    // b
console.log("c is " + c);     // c is function
console.log(c.first_name);    // undefined