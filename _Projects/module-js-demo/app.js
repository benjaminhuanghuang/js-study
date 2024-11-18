import { add, subtract } from './math.js';

console.log(add(2, 3));       // 5
console.log(subtract(5, 3));  // 2

// Using top-level await in a module
const data = await fetch('data.json').then(response => response.json());
console.log(data);