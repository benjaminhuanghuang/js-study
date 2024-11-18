/*
在函数中对参数所指向的对象进行修改时会影响到外面的实参，但对函数参数重新赋值时，不会影响到实参，
故js引用类型的传值方式为call by sharing

在传共享对象调用中，传递给函数的是实参所指向引用对象的地址，而不是实参的地址，即传递共享对象。
故在函数中修改引用对象时，实参的值也会跟着变化，而如果是重新给新参赋值后，再进行任何修改都不会影响到外面的实参了。

*/

function changeAgeAndReference(person) {
  person = {
      name: "John",
      age: 50
  };
}
var personObj1 = {
  name: "Alex",
  age: 30
};


changeAgeAndReference(personObj1);
console.log(personObj1); // -> ?  NOT change to 50
