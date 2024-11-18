const array = ["A", 1, 2, "A", "A", 3];

// Method 1
const uniqueArray = [...new Set(array)];
console.log("Method 1", uniqueArray); // [ 'A', 1, 2, 3 ]

// Method 2
const removeDuplicates = (arr) => {
  // arr.indexOf returns the `first index` at which a given element can be found
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
console.log("Method 2", removeDuplicates(["A", 1, 2, "A", "A", 3])); // [ 'A', 1, 2, 3 ]

// Method 3
// Can not use acc.push(val)
// The Array.push() method returns the new length of the array, not the updated array itself
const unique = array.reduce((acc, val) => acc.includes(val) ? acc : acc.push(val), []);
console.log("Method 3", unique); // [ 'A', 1, 2, 3 ]
