function MyPizza() {
    this.slices = 0;

    function slice() {
        // Doest NOT work
        this.slices++;
    }
    slice();
}

var pizza = new MyPizza();
console.log("I have " + pizza.slices + " pizza.");

function MyPizza_ES6() {
    this.slices = 0;

    var slice = () => {
        // lexically this
        this.slices++;
    }
    slice.call(this);
}
var pizza = new MyPizza_ES6();
console.log("I have " + pizza.slices + " pizza.");