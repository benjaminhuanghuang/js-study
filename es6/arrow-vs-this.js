let user = {
    name: "Ben",
    sayHi: function () {
        console.log(this.name);
    }
}

user.sayHi();

let user2 = {
    name: "Ben",
    sayHi: () => {
        console.log(this.name);
    }
}

user2.sayHi();