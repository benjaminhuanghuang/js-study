// https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a

function Foo(x) {
  this.x = x;
  this.y = 432;
}

Foo.prototype.point = function() {
  return 'Foo(' + this.x + ', ' + this.y + ')';
}

var myfoo = new Foo(99);
console.log(myfoo.point()); // prints "Foo(99, 432)"