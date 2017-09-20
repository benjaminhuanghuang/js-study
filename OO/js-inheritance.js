/*
当实例对象本身没有某个属性或方法的时候，它会到构造函数的prototype属性指向的对象，去寻找该属性或方法。这就是原型对象的特殊之处。

*/
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

// extends
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);  // 

  this.subject = subject;
}

Teacher.prototype = new Person();

var teacher = new Teacher("ben", "huang", 40, "male", "boxing", "programming")
teacher.greeting();