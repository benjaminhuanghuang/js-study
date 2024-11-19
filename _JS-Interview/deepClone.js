function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  const result = Array.isArray(value) ? [] : {};

  Object.setPrototypeOf(result, Object.getPrototypeOf(value)); // key the functions

  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      // key the functions
      result[key] = deepClone(value[key]);
    }
  }
  return result;
}

const obj = {
  a: 1,
  b: 2,
  c: new Map(),
  d: function () {},
};

console.log(deepClone(obj));

class Test {
  constructor() {
    this.a = 1;
    this.b = 2;
  }
  c() {
    console.log("c");
  }
}

Test.prototype.d = "d"; // clone this or not
const t = new Test();
console.log("Test object: ", deepClone(t)); // clone this or not
