function f(shouldInit) {
  if(shouldInit){
    var x = 10
  }

  return x
}
/*
function f(shouldInit) {
  var x
  if(shouldInit){
    x = 10
  }

  return x
}
*/


console.log(f(true))    // 10
console.log(f(false))   // undefinde

