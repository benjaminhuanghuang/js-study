(function(){
  var a = b = 3;
})();
console.log("a is " + a);   
console.log("b is " + b);

console.log("a defined? " + (typeof a !== 'undefined'));   
console.log("b defined? " + (typeof b !== 'undefined'));