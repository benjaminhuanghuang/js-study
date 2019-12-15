/*
ECMAScript 5 (2009) introduced Getter and Setters.
*/

// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language;
    }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.lang;

