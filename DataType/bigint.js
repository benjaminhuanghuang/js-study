/*
BigInt 提供了一种方法来表示大于 2^53 - 1 的整数。

Number 在 JavaScript 中被表示为双精度浮点数。这意味着它们的精度有限。

Number.MAX_SAFE_INTEGER 常数给出了可以安全递增的最大可能整数。它的值是 2**53-1。

Number.MAX_VALUE has a value of approximately 1.79E+308 , or 2^1024.
It is the largest number possible to represent using a double precision 
floating point representation. Generally speaking, the larger the number the less accurate it will be.

Max value
https://stackoverflow.com/questions/53335545/whats-the-biggest-bigint-value-in-js-as-per-spec
*/
console.log( BigInt((2**64)-1));

console.log( BigInt((2**64)));    // 奇怪，和 BigInt((2**64)-1) 的结果一样

console.log( BigInt(2**100));
console.log( BigInt((2**100)-1));
console.log( BigInt((2**100))-1n);


// 
console.log('Bitint va Number---------------')
console.log( Number.MAX_SAFE_INTEGER);
console.log( 2**64);
console.log( BigInt((2**64)));


console.log( BigInt((2**64))-1n);

const b =  BigInt((2**64))-1n;
console.log(typeof b);


// JavaScript 以前不能计算70的阶乘（即70!），因为超出了可以表示的精度。

let p =1;
for(let i =1; i <=70; i++){
  p *= i;
}
console.log(p);// 1.197857166996989e+100

// 现在支持大整数了，就可以算了
p =1n;
for(let i =1n; i <=70n; i++){
  p *= i;
}
console.log(p);// 11978571...00000000n
