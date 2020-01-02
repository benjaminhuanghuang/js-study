//https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c
function* calculator(input) {
  var doubleThat = 2 * (yield (input / 2))
  var another = yield (doubleThat)
  return (input * doubleThat * another)
}

const calc = calculator(10);

console.log(calc.next())
console.log(calc.next(7))
console.log(calc.next(100))