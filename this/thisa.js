
function funcA() {
  this.a = 1;
  // console.log(this.a);
}


function funcB() {
  this.a = 2;
  funcA();
}

funcB();

console.log(a ,this);

