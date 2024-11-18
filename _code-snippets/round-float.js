/*
~~ Round down (truncate) the result to the nearest integer.

The tilde ~ is a bitwise NOT operator, which inverts each bit of its operand. 
In JavaScript, the operand is treated as a 32-bit signed integer (32 bits), and the result of ~x is equivalent to -(x + 1).


However, the important thing here is that when you apply the bitwise NOT to a number in JavaScript, 
it converts the floating-point number to an integer before performing the operation. 
This means that the result of ~(count / 2) effectively rounds down the number (since it truncates the decimal part) and 
then negates the result.

For example:
If count = 5, then count / 2 = 2.5. Applying ~2.5 would first truncate it to 2 (getting rid of the decimal part) and then negate it to -3.
*/

console.log(5 / 2); // 2
console.log(~2.5); // -(2 + 1)= -3
console.log(~-3); // -(-3+1) = 2
console.log(~~(5 / 2)); // 2

console.log()

console.log(-9 / 2); // -4.5
console.log(~(-9 / 2)); // -(x + 1) = 3
console.log(~3); // -4
console.log(~~(-9 / 2)); // -4

