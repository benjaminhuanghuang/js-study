/*
    async function returns a promise
*/

async function test(){
    return "hello";
}

console.log(test()); //


test().then((value) => {
    console.log("value in the promise:", value);
});