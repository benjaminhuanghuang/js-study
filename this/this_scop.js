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

//Option1 
function MyPizza_Option1() {
    var self = this;
    this.slices = 0;

    function slice() {
        self.slices++;
    }
    slice();
}
var pizza = new MyPizza_Option1();
console.log("I have " + pizza.slices + " pizza.");

//Option2
function MyPizza_Option2() {
    this.slices = 0;

    function slice() {
        this.slices++;
    }
    slice.call(this);
}
var pizza = new MyPizza_Option2();
console.log("I have " + pizza.slices + " pizza.");


//Option3
function MyPizza_Option3() {
    this.slices = 0;

    var slice = () => {
        // lexically this
        this.slices++;
    }
    slice.call(this);
}
var pizza = new MyPizza_Option3();
console.log("I have " + pizza.slices + " pizza.");