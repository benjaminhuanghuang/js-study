// Currying
var addTo = function (passed) {
    var add = function (inner) {
        return passed + inner;
    }
    return add;
}

console.log(addTo(3));   // function : add

var addThree = addTo(3);

console.log(addThree(1));   // 4