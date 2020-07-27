/*
Tricky Javascript code snippets asked in the interview
*/


function display() {
  var a = b = 10;
}
display();
console.log('b', typeof b === 'undefined');         // b false
console.log('a', typeof a === 'undefined');         // a true


/*
So the above code will be converted to

function display() {
  var a = (b = 10);
}


function display() {
 b = 10; 
 var a = b;
}

So b becomes a global variable because there is no var keyword before it and a becomes a local variable. 
Therefore, outside the function, only bis available so typeof a === 'undefined' comes as true and
typeof b === 'undefined' comes as false.
*/


/*
How to fix


'use strict';


function display() {
  var a = b = 10;
}
display();
console.log('b', typeof b === 'undefined');
console.log('a', typeof a === 'undefined');


strict mode does not allow creating global variables
*/