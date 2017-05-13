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

var createEmployee = function (firstName, lastName, position) {
    var person = createPerson(firstName, lastName);
    person.position = position;
    return person;
}