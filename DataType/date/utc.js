/*

Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

new Date()
new Date(value)    integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC
new Date(dateString)  parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
*/



/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC

The Date.UTC() method accepts parameters similar to the Date constructor, but treats them as UTC. 
It returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
*/
const utc1 = Date.UTC(96, 1, 2, 3, 4, 5)
console.log(utc1);    // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
console.log(utcDate1.toUTCString());
// expected output: Fri, 02 Feb 1996 03:04:05 GMT

// Years between 0 and 99 are converted to a year in the 20th century (1900 + year)
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
console.log(utcDate2.toUTCString());
// expected output: Sun, 31 Dec 1899 00:00:00 GMT


// returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
const utcMilliseconds = Date.now();
console.log(utcMilliseconds);



