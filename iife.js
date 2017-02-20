/*
 *   iife = immediately invoked function expression
 *
 * */

/*
function increment(i) {
    return i + 1;
}

var increment = function (i) {
    return i + 1;
}

//-- Method 1
(function (i) {
    return i + 1;
})(j);

//-- Method 2
(function (i) {
    return i + 1;
}(j));

//-- Method 3
!function(){ code here ...}();
+function(){ code here ...}();

*/


var counter = (function(){
    var i =0;
    return {
        get: function(){
            return i;
        },
        set: function(val){
            i = val;
        },
        increment : function(){
            i++;
        }
    }
})();

console.log(counter.get());    // 0
counter.set(5);
counter.increment();
console.log(counter.get());    // 6