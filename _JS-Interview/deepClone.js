function deepeclone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  const obj = Array.isArray(value)? [] : {};

  for (let key in value) {
    obj[key] = deepeclone(value[key]);
  }
  return value;
}

const obj = {
  a: 1,
  b: 2,
  c: new Map(),
  d: function () {},
};

obj.e = obj;
console.log(deepClone(obj));
