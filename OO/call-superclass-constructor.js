function Point2D(x, y) {
  this.x = x;
  this.y = y;
}

function Point3D(x, y, z) {
  Point2D.call(this, x, y);
  this.z = z;
}