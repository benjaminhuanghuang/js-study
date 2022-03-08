/*
  Issue in the nested callback function.
  The sample comes from React Full stack
*/
let age = 2;
let kitty = {
  age:1,
  grow: function(){
    setTimeout(function(){
      console.log(++this.age)
    }, 1000)
  }
};

// In the nested function, the 'this' points to global object.
kitty.grow();    // 3


// Fix1
let kittyFix1 = {
  age:1,
  grow: function(){
    const self = this;
    setTimeout(function(){
      console.log(++self.age)
    }, 1000)
  }
};

kittyFix1.grow(); 

// Fix2
let kittyFix2 = {
  age:1,
  grow: function(){
    setTimeout(function(){
      console.log(++this.age)
    }.bind(this), 1000)
  }
};

kittyFix2.grow(); 

// Fix by arrow
let kittyArrow = {
  age:1,
  grow: function(){
    setTimeout(()=>{
      console.log(++this.age)
    }, 1000)
  }
};

kittyArrow.grow(); 