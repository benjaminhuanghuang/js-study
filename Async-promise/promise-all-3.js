/*
https://www.bilibili.com/video/BV1aSD2YXE6Q
*/

Promise.myAll = function (proms) {
    let res,rej;
    
    const p = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
    });

    let i =0;
    let fulfilled = 0;
    const result = [];
    for (const prom of proms) {
        const index = i;
        i++;
        Promise.resolve(prom).then((val) => {
           // collect all result
            result[index] = val;
           // check if all promises are resolved
           fulfilled++;
           if(fulfilled === i) {
               res(result);
           }
        }, rej);   // call reject if any promise is rejected
    }

    // proms is empty
    if(i === 0) {
        res([]);
    }

    return p;
}


Promise.myAll([1, 2,3 ]).then(res => console.log(res)); // [1, 2, 3]

Promise.myAll([1, 2,3, Promise.reject('error') ]).then(res => console.log(res), err=>console.log('err', err)); // [1, 2, 3]