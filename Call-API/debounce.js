
/*
<input type="text" onkeyup="processChange()" />
*/


function debounce_leading(func, timeout = 300){
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

function saveInput(){
  console.log('Saving data');
}
const processChange = debounce(() => saveInput());


