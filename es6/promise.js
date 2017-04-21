// callback hell in ES5

function backAsync(callback) {
    if (callback) {
        callback(null, pizza)
    }
}

backAsync(function (err, pizza) {
    if (err)
        throw err;
    consume(pizza);
});

// Promise
function backAsync() {
    return new Promise();
}

backAsync()
    .then(pizza => {
        consume(pizza);
    })
    .catch(err => {
        throw err;
    });

// Change callback to promise
function getData(ticket) {
    return new Promise((resolve, reject) => {
        //read data ...
        request('http://api' + ticket, (error, res, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    }); 
};