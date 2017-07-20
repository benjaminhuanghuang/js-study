let user = {
    name: "Ben",
    sayHi: function () {
        //let self = this; // fix
        setTimeout(function () {
            console.log(this.name)
        }, 1000);
    }
}

user.sayHi();

// Use arrow function fix the issue.
// Because arrow function do not bind to "this" keyword, it use parent's "this" keyword
// arrow functions are bound to their lexical scope. 
// This means that inside an arrow function the value of "this" is
// the same as in the parent block:
let user2 = {
    name: "Ben",
    sayHi: function () {
         setTimeout(()=> {
            console.log(this.name)
        }, 1000);
    }
}

user2.sayHi();