# Generator (ES2015)

```
function * foo() {
  console.log('start');

  yield 'foo'
}
const generator = foo(); //  函数并未执行

const result = generator.next(); // 执行到yield 

console.log(result);

generator.throw()
```