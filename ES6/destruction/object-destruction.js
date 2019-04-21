
// Default value
const settings = {
  speed: 150
}
const { speed = 750, width = 500 } = settings;
console.log(speed); // 150 - comes from settings object
console.log(width); // 500 - fallback to default

// Rename
const person = {
  first: 'Wes',
  last: 'Bos',
};

const { first: firstName } = person;
console.log(firstName); // Wes


