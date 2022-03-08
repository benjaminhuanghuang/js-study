'use strict'

let myPromise = new Promise((a, b) => {
    setTimeout(() => {
        a("Good to go!");
    }, 3000)

    setTimeout(() => {
        b("Sorry!");
    }, 500)
});

//--Method 1
myPromise.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
})

//-- Method 2
myPromise.then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });