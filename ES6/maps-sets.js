/*
    Map
    Set
    WeakMap
    WeakSet
*/
var m = new Map();
m.set("hello", "something");
m.set(s, 34);
console.log(m.get(s) == 34); //true
// for each
m.forEach((value, key) => console.log(key, value));


var s = new Set();
s.add("hello").add("something").add("hello");
console.log(s.size == 2); //true
console.log(s.has("hello") === true);   //true

/*
WeakMap 的 key 只能是非空对象（non-null object）
WeakSet keys cannot be primitive types. Nor they can be created by an array or another set.
WeakMap 对它的 key 仅保持弱引用，也就是说它不阻止垃圾回收器回收它所引用的 key。
WeakMap 最大的好处是可以避免内存泄漏。一个仅被 WeakMap 作为 key 而引用的对象，会被垃圾回收器回收掉。
WeakMap 拥有和 Map 类似的 set(key, value) 、get(key)、has(key)、delete(key) 和 clear() 方法，
但没有 size 属性，也没有任何与迭代有关的方法。
*/
var wm = new WeakMap();
wm.set("sss", {extra:42});
var objRef = new Object();
wm.set(objRef, {extra: 42});
