var str = 'Is this This?';

/*
g: global match; find all matches rather than stopping after the first match
i: ignore case
m: multiline; treat beginning and end characters (^ and $) as working over multiple lines
u: unicode;
y: sticky; matches only from the index indicated by the lastIndex property of this regular 
        expression in the target string (and does not attempt to match from any later indexes).

*/
var regex = new RegExp("is","gi");
//var regex = /is/gi;

//method that tests for a match in a string. It returns true or false.
console.log(regex.test(str));

// It returns an array of information or null on a mismatch.
console.log(regex.exec(str));   // ["is", index: 5, input: "Is this This?"]
// works with "g" option 
console.log(regex.exec(str));   // ["is", index: 10, input: "Is this This?"]

// returns all patterns matched ! str.match
console.log(str.match(regex));    //["Is", "is", "is"]

// Replace
console.log(str.replace(regex, str=>"XX"))      //XX thXX ThXX?

// return the index of first match
console.log(str.search(regex));           // 0


