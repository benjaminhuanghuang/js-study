function desc(name = "Peter", age = 5) {
  return `${name} is ${age} years old`;
}

console.log(desc());

// default parameters should be the last ones
function isEqual(num = 11, compare)
// function isEqual(num, compare =10)
{
  console.log(num);
  console.log(compare);
  return num === compare;
}
console.log(isEqual(11));

//function isEqual(num = compare, compare = 10)   //Error: compare is not defined

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
