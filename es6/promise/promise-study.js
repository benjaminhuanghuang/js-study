'use strict'

// Immediately resolved
var myPromise = Promise.resolve("promise resolved");
myPromise.then((res) => {
    console.log(res);
});

//  resolve with delay
var myPromise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(4);
    }, 2000);
});
myPromise2.then((res) => {
    console.log(res);
});

// get data
function getData(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.reponse);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }
        xhr.send();
    })
}

getData("GET", "http://jsonplaceholder.typicode.com/todos")
    .then((data) => {
        let todos = JSON.parse(data);
        let output = "";
        for(let todo of todos){
            out += `
                <div>
                    <h3>${todo.title}</h3>
                    <p>Completed: ${todo.completed}</p>
                </div>
            `;
        }
        document.getElementById('template').innerHTML = output;
    })
    .catch((err) => {
        console.log(err);
    });