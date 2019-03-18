/*
https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd


*/


 /*
 Unlike other programming languages, JavaScript doesn’t have access modifiers,
 you can’t declare a variable as private or public. 
 So the Module pattern is also used to emulate the concept of encapsulation.

This pattern uses IIFE (immediately-invoked function expression), closures and function 
scope to simulate this concept. For example:
*/
const myModule = (function() {
  
  const privateVariable = 'Hello World';
  
  function privateMethod() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function() {
      privateMethod();
    }
  }
})();
myModule.publicMethod();
/*
As it’s IIFE, the code is immediately executed, and the returned object is assigned to 
the myModule variable. 

Due to closures, the returned object can still access the functions and variables defined 
inside the IIFE even after when IIFE has finished.

So the variables and functions defined inside the IIFE are essentially hidden from the 
outer scope and thus making it private to the myModule variable.

After the code is executed, the myModule variable looks like this:
*/
const myModule = {
  publicMethod: function() {
    privateMethod();
  }};