//https://www.youtube.com/watch?v=c0mLRpw-9rI


var obj = {num: 2};
var obj2 = {num: 5};

var addToThis = function (a, b) {
    return this.num + a + b;
}

// Call
var ans = addToThis.call(obj, 1, 3);  //function_name.call(obj, function_args)
console.log("call function on obj, 2 + 1 + 3");
console.log(ans);

// Apply
var arr = [1, 2, 3];
var ans = addToThis.apply(obj, arr);
console.log("call function on obj, 2 + 1 + 2");
console.log(ans);

var ans = addToThis.apply(obj2, arr);
console.log(ans);

var arr = [1, 2, 3];
var bound = addToThis.bind(obj);  //return a function

console.dir(bound);
console.log(bound(1, 2));