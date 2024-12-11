const testString = 'this hat is better than that hat.';
let regex = /th(..) hat/g;

/*
    Match can help if you want an array of all matches, but you don’t care about the matched groups:
*/

let result = testString.match(regex);
console.log(result); // Output: [ 'this hat', 'that hat' ]
/*
    Without the g flag you can also use it to get groups, but you’ll only see the first match:
*/
regex = /th(..) hat/;
result = testString.match(regex);   // return the first group
console.log(result); 

/*
The exec method is useful when the regular expression has the g (global) flag. 
It retrieves one match at a time and maintains the position of the next match.
*/

regex = /th(..) hat/g;
result = regex.exec(testString);
while (result != null) {
  console.log(result);
  result = regex.exec(testString);
}

/*
matchAll doesn’t just return an array but an iterable instead. With the spread operator you can create an array from the result though.
*/
regex = /th(..) hat/g;
result = [...testString.matchAll(regex)];
console.log(result);