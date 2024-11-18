/*
  obj
    __proto__
      constructor
      __proto__

  Every object has a property named __proto__
  
  object can assecss the propterties or method on __propto__ like obj.funOnProto()

  __proto__ has a consturctor method
*/

function User_V1(email, name) {
  this.email = eamil;
  this.name = name;
  this.online = false;
  this.login = function(){
    console.log(this.email, "logged in");
  }
}


function User(email, name) {
  this.email = eamil;
  this.name = name;
  this.online = false;
}

User.prototype.login = function(){
  this.online = true;
  console.log(this.email, "logged in");
}



