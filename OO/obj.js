function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.magnitude = function () {
    return Math.sqrt(x * x + y * y)
}

var point = new Point(100, 10);


console.log(point);