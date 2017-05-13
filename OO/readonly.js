// defineProperties ES5
var createPerson = function (firstName, lastName) {
    var person = {};
    Object.defineProperties(person, {
        firstName: {
            value: firstName,
            writable: false
        },
        lastName: {
            value: lastName,
            writable: false
        }
    });
}

var johnDoe = createPerson("John", "Doe");
johnDo.firstName = "changed";