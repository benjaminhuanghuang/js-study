


// Access char in the string
var str = "HELLO WORLD";
var res = str.charAt(0);


str = "Hello";
for (var i = 0; i < str.length; i++) {
  var  s = str[i];
  //console.log(s);
}


// Sample to determine string is multable
str = "Hello";
let left = 0;
let right = str.length-1;
while(left < right)
{
  let temp = str[left];
  str[left] = str[right];
  str[right] = temp;
  left++;
  right--;
}
str[0] = '0';
console.log(str);

