// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
  setTimeout(function () {
    this.scoops++;
    console.log('scoop added!');
    console.log(dessert.scoops);   // 0
  }, 50);
};

let dessert = new IceCream();
dessert.addScoop();
/*
The function passed to setTimeout() is called without new, without call(), without apply(), and without a context object. 
That means the value of this inside the function is the global object and NOT the dessert object. 
So what actually happened was that a new scoops variable was created (with a default value of undefined) and was then 
incremented (undefined + 1 results in NaN)
*/

// Fix it using closure
// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
  const cone = this; // sets `this` to the `cone` variable
  setTimeout(function () {
    cone.scoops++; // references the `cone` variable
    console.log('scoop added!');
    console.log(dessert.scoops);   // 0 !
  }, 500);
};

dessert = new IceCream();
dessert.addScoop();

// adds scoop to ice cream using => function
IceCream.prototype.addScoop = function () {
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++;
    console.log('scoop added!');
    console.log(dessert.scoops);   // 1
  }, 500);
};

dessert = new IceCream();
dessert.addScoop();
