let obj = {value: 10};

function increaseObj(o){
  o.value++;
}

increaseObj(obj);
console.log(obj);  // Changed to 11

// Value type
let number = 10;
function increaseNum(v){
  v++;
}

increaseNum(number); 
console.log(number);    // still 10