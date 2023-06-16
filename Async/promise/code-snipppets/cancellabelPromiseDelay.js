/*

https://twitter.com/oliverjumpertz/status/1502585342360236033


*/

const delay = (delay, value) =>{
  let timeout;
  let _reject = null;

  const promise = new Promise((resolve,  reject)=>{
    _reject = reject;
    timeout = setTimeout(resolve, delay, value);
  })


  return {
    promise, 
    cancel: () =>{
      if(!timeout) {
        return;
      }

      clearTimeout(timeout);
      timeout = null;
      _reject();
    }
  }
}


const delayed = delay(3000, 'value');


delayed.promise.then((value)=> console.log(value)).catch(()=> console.error('Promise rejeted'));


//delayed.cancel();