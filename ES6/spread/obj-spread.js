
let user ={
    name:"ben",
    location:"China"
}

let person = {...user,
    age:25
}

console.log(person);

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }
console.log(clonedObj);

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
console.log(mergedObj);