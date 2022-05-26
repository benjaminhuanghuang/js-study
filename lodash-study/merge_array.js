

const array1 = [
  {
    name: "aaa",
    value: "1111",
  },
  {
    name: "aaa",
    value: "1111",
    age: 111,
  },
];

const array2 = [
  {
    name: "aaa",
    value: "1111",
  },
  {
    name: "bbb",
    value: "2222",
  },
];

// does not work
function mergeArrays(a1, a2) {
  return [...new Set([...a1,...a2])]
}


console.log(mergeArrays(array1, array2));