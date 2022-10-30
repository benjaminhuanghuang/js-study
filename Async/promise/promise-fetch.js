'use strict'
const url = "https://api.icndb.com/jokes/random/10";
fetch(url)
    .then((res)=>{
        res.json()   // return a promise
        .then((data)=>{
            console.log(data);
        });
    })
    .catch((err)=>{
        console.log(err);
    });
    
