/*
  Subclasses with ES5:
*/
function Tree(size, leaves) {
  this.size = (typeof size === "undefined") ? 10 : size;
  const defaultLeaves = { spring: 'green', summer: 'green', fall: 'orange', winter: null };
  this.leaves = (typeof leaves === "undefined") ? defaultLeaves : leaves;
  this.leafColor;
}

Tree.prototype.changeSeason = function (season) {
  this.leafColor = this.leaves[season];
  if (season === 'spring') {
    this.size += 1;
  }
}

function Maple(syrupQty, size, leaves) {
  Tree.call(this, size, leaves);
  this.syrupQty = (typeof syrupQty === "undefined") ? 15 : syrupQty;
}
/*
  inherited
*/
Maple.prototype = Object.create(Tree.prototype);
// The constructor property returns a reference to the Object constructor function that created the instance object.
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function (season) {
  Tree.prototype.changeSeason.call(this, season);
  if (season === 'spring') {
    this.syrupQty += 1;
  }
}

Maple.prototype.gatherSyrup = function () {
  this.syrupQty -= 3;
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');



/*
  Subclasses with ES6:  using "super" and "extends" keywords
  typeof Plane === 'function'
  startEngines() method ens up on Plane.prototype

  NOTE! there aren't any commas between the method definitions in the Class
  */
class Tree {
  constructor(size = '10', leaves = { spring: 'green', summer: 'green', fall: 'orange', winter: null }) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    // super() call the constructor funnciton of parant calss
    // super() must be called before this
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');