// In node module, the top level this keyword is exports object.
// It is empty by default

console.log("Empty this ", this);    // {}

function fn(){
    console.log(" this in fn() ", this);   // global context
}
fn();

function fn(){
    console.log(" this in fn() ", this);   // global context
}
fn();


exports.i = "am exports";
console.log(this); // {i: 'am exports'}

let util = {
    f1: function () {
        console.log(this);
    },

    f2: () => {
        console.log(this);
    }
}

// this is the caller
util.f1(); // { f1: [Function: f1], f2: [Function: f2] }
// this is the parent
util.f2(); // { i: 'am exports' }