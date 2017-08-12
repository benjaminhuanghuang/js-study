/*
  In ES6 , variable should be declared before use
*/
age = 27;
console.log(age);
var age;

//name = 'ben';   // Error
//console.log(name);    
//let name;   


function doSth(){
  time = 10;
}
let time;
doSth();
console.log(time);  
