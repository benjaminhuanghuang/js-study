console.log(this);   // {}

function MyPizza() {
    this.slices = 0;

    function slice() {
        // Does NOT work
        console.log(this);
        this.slices++;
    }
    slice();
}

var pizza = new MyPizza();    // 'this' is node object
console.log("I have " + pizza.slices + " pizza.");

function MyPizza_ES6() {
    this.slices = 0;

    var slice = () => {
        // lexically this
        console.log(this);
        this.slices++;
    }
    slice.call(this);
}
var pizza = new MyPizza_ES6();
console.log("I have " + pizza.slices + " pizza.");