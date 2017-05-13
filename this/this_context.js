var name = "Ben";

var globalGreet = function () {
    return "My name is " + this.name; // Global this.
}

var msg = globalGreet();
console.log(msg);

var john = {
    name: "John",
    greet: globalGreet   //this bind to john
}

//
var msg = john.greet();
console.log(msg);

var tom = {
    name: "Tom",
    greet: globalGreet.bind(window)   //this bind to global window
}

var msg = tom.greet();     // Ben
console.log(msg);