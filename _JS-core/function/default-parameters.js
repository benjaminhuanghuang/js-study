/*

Default parameters are added by the ES6 standard

*/


/*
Old style
*/
function greet(name, greeting) {
  name = (typeof name !== 'undefined') ? name : 'Student';
  greeting = (typeof greeting !== 'undefined') ? greeting : 'Welcome';

  return `${greeting} ${name}!`;
}
/* ES6 Style */
function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}


function performAction(ninja, action = "skulking") {
  return ninja + " " + action;
}
assert(performAction("Fuma") === "Fuma skulking",
  "The default value is used for Fuma");

