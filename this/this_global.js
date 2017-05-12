let age = 2;
let kitty = {
    age: 1,
    grow: function () {
        // this will point to global
        setTimeout(function () {console.log(++this.age);}, 100);
    }
}

kitty.grow();
