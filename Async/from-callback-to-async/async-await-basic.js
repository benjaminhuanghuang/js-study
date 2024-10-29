// async functions always return a promise
// That promise is fullfilled with the value will be returned
const doWork = async () => {
  return 11;
}

console.log(doWork());   // get Promise { 11 }

doWork().then((result) => {
  console.log('result:', result)
}).catch((e)=>{
  console.log("e: ", e)
});