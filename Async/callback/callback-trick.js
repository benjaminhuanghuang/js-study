/*
Print 10
*/
function printNumbers_10() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  }
}

// printNumbers_10();

/* 
  Fix the issue
*/
function printNumbers() {
  for (var i = 0; i < 10; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, 100 * i);
    })(i);
  }
}

/* 
  Fix the issue 2, using let
*/
function printNumbers2() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  }
}

printNumbers();
