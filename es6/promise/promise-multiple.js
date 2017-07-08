'use strict'

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Good to go!");
    }, 3000)

});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 - Good to go!");
    }, 3100)

    setTimeout(() => {
        reject("Promise2 - sorry!");
    }, 3000)
});

Promise.all([myPromise, myPromise2])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });