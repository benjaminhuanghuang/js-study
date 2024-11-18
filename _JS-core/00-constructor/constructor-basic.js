/*


*/

/*
   Factory function
   - Use camel notation
*/
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

/*
  Constructor
   - Use Pascal notation
   - this refer to empay object
*/

function Circle(radius) {
  // var this = {}
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  // return this;
}

/*
  new operator 
    1. create an empty object
    2. set this point to he empty object
    3. execute the Constructor
    4. return the new object.
*/
const circle = new Circle(5);

