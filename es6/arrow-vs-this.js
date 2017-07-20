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
let user2 = {
    name: "Ben",
    sayHi: function () {
         setTimeout(()=> {
            console.log(this.name)
        }, 1000);
    }
}

user2.sayHi();