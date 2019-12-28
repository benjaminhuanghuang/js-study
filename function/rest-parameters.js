/*
Rest parameters are added by the ES6 standard

*/

function multiMax(first, ...remainingNumbers) {
  // The remainingNumbers is an array, we can call sort method on it
  var sorted = remainingNumbers.sort(function (a, b) {
    return b - a;
  });
  return first * sorted[0];
}

assert(multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)");