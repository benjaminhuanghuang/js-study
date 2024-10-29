const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      if(a<0 || b<0)
      {
        return reject('Number must be positive.')
      }
      resolve(a + b) 
    }, 2000)
  })
}

// async functions always return a promise
// That promise is fullfilled with the value will be returned
const doWork = async () => {
  const sum = await add(1, 2);
  const sum2 = await add(sum, -1);
  const sum3 = await add(sum2, 2);
  return sum3;
}

console.log(doWork());   // get Promise { <Pending> }

doWork().then((result) => {
  console.log('result:', result)
}).catch((e)=>{
  console.log("e: ", e)
});