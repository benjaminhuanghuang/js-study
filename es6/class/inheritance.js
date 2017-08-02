class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  shout() {
    return `My name is ${this.name}, age is ${this.age}`;
  }

  static foo() {
    return 'Here is a static method';
  }
}

class Dog extends Animal {
  constructor(name, age = 3, color = 'black') {
    super(name, age); // call super()
    this.color = color;
  }

  shout() {
    // Call method in super class
    return super.shout() + `, color is ${this.color}`;
  }
}

const dog = new Dog('jack');
console.log(dog.shout());