class Animal{
  constructor(name, age)
  {
    this.name = name;
    this.age = age;
  }

  shout()
  {
    return `My name is ${this.name}, age is ${this.age}`;
  }

  static foo(){
    return 'Here is a static method';
  }
}


const cow = new Animal('betty', 2);
console.log(cow.shout());
console.log(Animal.foo())