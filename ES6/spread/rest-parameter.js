//--------------------------
// old style
//--------------------------
function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}
//--------------------------
// ES6 rest parameter style
//--------------------------
function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

// Assigning the values of an array to variables
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);  // is an array