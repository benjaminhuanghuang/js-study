// https://codeburst.io/javascript-essentials-arrays-2d275b9598c5

/*-------------------------------------------------------------------------------
 Array Creation
-------------------------------------------------------------------------------*/

// - shorthand, most common
const arr = [];
const arr2 = [1, 2, 3];

// - new is not required here do NOT do this
const a = new Array();

// Array with a length of 20 "empty" elements
const emptyArr = Array(20)
emptyArr.fill(0);

// What an array is bassically is an object whose keys a indexs and elements as values
const arrExposed = {
  "0": 1,
  "1": 2,
  "2": 3
}

/*-------------------------------------------------------------------------------
 Array adding / removing, works like stack
-------------------------------------------------------------------------------*/
const arrTest = [1, 2, 3];

// remove the last element, return 3, arr is now [1, 2]
const removeLast = arrTest.pop();

// remove the first element, return 1, arr is now [2]
const removeFirst = arrTest.shift();

// add to end, return the lenght of array, array is now [2, 11]
const addLast = arrTest.push(11);

// add to start, returns the length of array, array is now [1, 2, 11]
const addFirst = arr.unshift(1);

// remove and add elements, (start, deleteCount, itemsToAdd)
// returns the removed items or []
// returns [2], and arr becomes [1, 'added', 11]
const addAndRemove = arrTest.splice(1, 1, 'added')

/*-------------------------------------------------------------------------------
 Modify every elements in the array
-------------------------------------------------------------------------------*/
// returns a new array , does NOT change the original array
const prices = [5, 10, 20, 18];
const halfPrice = price.map(price => price / 2);

// modify even item, add 1 to the even item
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map(n => n % 2 === 0 ? n + 1 : n);

/*-------------------------------------------------------------------------------
 Clone array
-------------------------------------------------------------------------------*/
const arr = [1, 2, 3, 4, 5];
// using Array.slice(start, end), not including end
const newArr = arr.slice(2, 4);    // newArry is [3, 4]

// Using spread operator
const newArr = [...arr];

/*-------------------------------------------------------------------------------
 Find element or index
-------------------------------------------------------------------------------*/
const arr = [1, 2, 3, 4, 5];

// Array.find returns found value or undefined
const firstLargerThan = arr.find(n => n > 3);    // 4

const firstLargerIndex = arr.findIndex(n => n > 3);    // 3

// return new array
const largetThan = arr.filter(n => n > 3);   // [4, 5]

/*-------------------------------------------------------------------------------
 Is element in array
-------------------------------------------------------------------------------*/
const people = ["Bob", "Jeff", "Tina", "Waldo", "Bill"];

// Array.includes( arr, startIndex) returns true or false 
const has = people.includes("Ben");

/*-------------------------------------------------------------------------------
 No duplicates by using Set
-------------------------------------------------------------------------------*/
const dupes = [1, 1, 2, 2, 3, 3];
const uniqueSet = new Set(dupes);   // create a Set Object {1, 2, 3}
const uniqueArr = [...uniqueSet]    // convert set to array [1, 2, 3]


/*-------------------------------------------------------------------------------
Do elements fulfill reuirements
-------------------------------------------------------------------------------*/
const ages = [27, 30, 15, 23, 21, 19, 18, 16];

const everyoneOldEnough = ages.every(age => age >= 18);     // return false
const someoneOldEnough = ages.some(age => age >= 18);     // return true

/*-------------------------------------------------------------------------------
Sort
-------------------------------------------------------------------------------*/
// Array.sort() does not work how one would expect! By deftault, sort() sorts Strings.
// Array.sort( func(a, b) )
//    - func < 0, return a
//    - func = 0, 
//    - func > 0, b comes first

// ascending
arr.sort((a, b) => a - b);

// descending
arr.sort((a, b) => b - a);

/*-------------------------------------------------------------------------------
Reverse
-------------------------------------------------------------------------------*/
const str = 'abc';
// Strings are immutable, first convert it to an array
const reversed = str.split('').reverse().join('');

/*-------------------------------------------------------------------------------
Flatten
-------------------------------------------------------------------------------*/
const mess = [1, 2, [3, 4, [5, 6]]];
// Array.flat(depth) depth is how deep to flatten, default is 1
const flat1 = mess.flat()   // get [1, 2, 3, 4, [5, 6]]
const flat2 = mess.flat(2)  // get [1, 2, 3, 4, 5, 6]

/*-------------------------------------------------------------------------------
Convert Array to Object
-------------------------------------------------------------------------------*/
const arr = [['key', 'value'], ['x', 500]];
// Use Array.reduce(func(accumulator, element, index, array), initial value)
const obj = arr.reduce((accumulator, element) => {
  const [key, value] = element;
  accumulator[key] = value;
  return accumulator
}, {});

/*-------------------------------------------------------------------------------
For loop
-------------------------------------------------------------------------------*/
const arr = ['a', 'b', 'c']

arr.forEach((val, index, array) => {
  console.log(val, index)    // a 0, b 1, c 2
});

for (const [index, val] of arr.entries()) {
  console.log(val, index)    // a 0, b 1, c 2
};

for (const key in arr) {
  console.log(key); // 0, 1, 2
}

for (const value in arr) {
  console.log(value); // a, b, c
}

/*-------------------------------------------------------------------------------
Multi-Dimensional
-------------------------------------------------------------------------------*/
const arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
]

arr.map((row, y) => {
  console.log("---Row ", y, row, '---');
  row.map((col, x) => {
    console.log("COL:  ", x, col);
  });
})

// Use Array.reduce(func(accumulator, element, index, array), initial value)
const diagonal = arr.reduce((acc, row, y, array) => {
  const len = row.length;
  const rightDiag = row[len - y - 1]
  const leftDiag = row[y]
  acc[0].push(leftDiag);
  acc[1].push(rightDiag);
  return acc
}, [[], []]);
// [['a', 'e', 'i'], ['c', 'e', 'g']]