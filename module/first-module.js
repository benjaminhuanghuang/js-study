let tempData = "";

module.exports = {
    doIt: function () {
        console.log('Did it!');
    },
    doSomething: function () {
        console.log("did something");
    },
    getItDone: function () {
        console.log("got it done!");
    },

    put: function (d) {
        tempData = d;
    },
    get: function () {
        return tempData;
    }
}