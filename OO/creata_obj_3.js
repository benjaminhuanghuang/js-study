// Use function
var createPerson = function (firstName, lastName) {
    return {
        firstName: "John",
        lastName: "Doe",
        sayHi: function () {
            return "Hi there";
        }
    };
}

var johnDoe = createPerson("John", "Doe");