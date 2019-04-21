/*
  ES5 "Class"
  The Plane function is a constructor function that will create new Plane objects.
  The data for a specific Plane object is passed to the Plane function and is set on the object. 
  
  Methods that are "inherited" by each Plane object are placed on the Plane.prototype object. 
  "inherited" methods are placed on the constructor function's prototype object
  startEngines() method ens up on Plane.prototype
  richardsPlane has a __proto__ property point to Plane.prototype
*/
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};

var richardsPlane = new Plane(1);
richardsPlane.startEngines();

var jamesPlane = new Plane(4);
jamesPlane.startEngines();



/*
  ES6 "Class"
  typeof Plane === 'function'
  startEngines() method ens up on Plane.prototype

  NOTE! there aren't any commas between the method definitions in the Class
  */
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines...');
    this.enginesActive = true;
  }

  static badWeather(planes) {
    for (plane of planes) {
      plane.enginesActive = false;
    }
  }
}

typeof Plane; // function
// Using static method
Plane.badWeather([plane1, plane2, plane3]);