//
// Factory pattern
//
var peopleFactory = function (name, age, state) {
    var tmp = {};
    tmp.age = age;
    tmp.name = name;
    tmp.state = state;

    tmp.printPerson = function () {
        console.log(this.name + ", " + this.age + ", " + this.state);
    };

    return tmp;
}

var person1 = peopleFactory("john", 23, "CA");
var person2 = peopleFactory("kim", 27, "KY");

person1.printPerson();
person2.printPerson();

//
// Constructor pattern
// The problem of constructor pattern is: all instances have their own printPerson() function
//
var peopleConstructor = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function () {
        console.log(this.name + ", " + this.age + ", " + this.state);
    };
};

var person1 = new peopleConstructor("john", 23, "CA");
person1.printPerson();

//
// Prototype pattern
//
var peopleProto = function () {
};
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.state = "no state";
peopleProto.prototype.printPerson = function () {
    console.log(this.name + ", " + this.age + ", " + this.state);
};


var person1 = new peopleProto();
//person1.name="Ten";
person1.age = 30;
person1.state = "NY";
person1.printPerson();

var person2 = new peopleProto();
//person1.name="Ten";
person2.age = 30;
person2.state = "NY";
console.log('name' in person2);   // true!
console.log(person2.hasOwnProperty('name'));   // false!

//
//  Dynamic prototype pattern
//
var peopleDynamicProto = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;

    if (typeof this.printPerson != "function") {
        peopleDynamicProto.prototype.printPerson = function () {
            console.log(this.name + ", " + this.age + ", " + this.state);
        };
    }
};

var person1 = new peopleDynamicProto("john_dynamic_proto", 23, "CA");
person1.printPerson();
