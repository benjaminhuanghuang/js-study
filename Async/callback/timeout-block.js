var start = Date.now();
setTimeout(() => {
    console.log(Date.now() - start);
    for (let i = 0; i < 1000000000; i++) {}
}, 1000);


setTimeout(() => {
    console.log(Date.now() - start); // blocked by for loop in first call back
}, 2000);