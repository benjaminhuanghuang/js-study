/*
  Tricky Javascript code snippets asked in the interview
*/


var number = 10;
var display = function () {
  console.log(number);
  var number = 20;
};
display();     // undefined



/*

Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope or block.

So the above code will be converted to

var number = 10;
var display = function () {
  var number;
  console.log(number);
  number = 20;
};
display();

*/