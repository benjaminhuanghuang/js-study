## Reference
-[ES6 - Udacity]

## ES 6 Syntax changes
### let , const

### String template literal 
```
`${expression}`
```
### Destructuring for array and object
```
  const[a, b] = [1,2,3,4]
```
```
const settings = {
  speed: 150
}
const { speed = 750, width = 500 } = settings;
```

### Object literal shorthand
```
let gemstone = {
  type:type,
  color:type,
  carat:type,
  calculateWorth: : function() { ... }
};
```
If object properties have the same name as the variables being assigned to them, then you can drop the duplicate variable names.

function keyword is not needed in ES6
```
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};
```
### Iteration / For-of loop
```
  for(let char of str)
  {

  }
```

### Spread operator
array
```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];
```
object
```
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 }; // Object { foo: "bar", x: 42 }
console.log(clonedObj);

var mergedObj = { ...obj1, ...obj2 }; // Object { foo: "baz", x: 42, y: 13 }
console.log(mergedObj);
```

## ES 6 Function changes
###  => function 

### function default parameters and rest parameters

## Class
- Class, super, extends

## Symbol

## Iterators and Generators

## Modules




## Promises

## Maps, WeakMaps and Sets, WeakSet
- a WeakSet can only contain objects
- a WeakSet is not iterable which means it can’t be looped over
- a WeakSet does not have a .clear() method
When an object is deleted, the object will also be deleted from the WeakSet when garbage collection runs. This makes WeakSets useful in situations where you want an efficient, lightweight solution for creating groups of objects.

## Reflect API

## The Proxy API



