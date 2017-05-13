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
        },
        fullName: {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            set: function (value) {
                this.firstName = value;
                this.lastName = value;
            }
        }
    });
}