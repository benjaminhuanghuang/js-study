/*
The whoAmI1 function is in strict mode; when it’s called as a function, the
value of the this parameter will be undefined (and not window). The second
assertion will pass: If a function in nonstrict mode is called as a function, this
refers to the global object (the window object, when running the code in the
browser).
*/

function whoAmI1() {
  "use strict";
  return this;
}
function whoAmI2() {
  return this;
}
assert(whoAmI1() === window, "Window?"); //fail
assert(whoAmI2() === window, "Window?"); //pass

