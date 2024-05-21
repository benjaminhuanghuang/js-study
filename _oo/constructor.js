/*
    A constructor is a special method used to initialize a newly created object once the memory has been allocated for it. 
    Introduced in ES2015+

    Classes are syntactic sugar for JavaScript’s prototypal approach to inheritance
*/


// The three common ways to create new objects in JavaScript are as follows:

// Each of the following options will create a new empty object
const newObject1 = {};

const newObject2 = Object.create(Object.prototype);

const newObject3 = new Object();


class Car {
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    toString() {
        return `${this.model} has done ${this.miles} miles`;
    }
}


// All Car objects will now share a single instance of the toString() method.
Car.prototype.toString = function() {
    return `${this.model} has done ${this.miles} miles`;
};
