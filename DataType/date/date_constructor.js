
// Set variable to current date and time
// This will be created according to the current computer's system settings.
const now = new Date();
// Get the current timestamp
// The output is a large number that appears the current timestamp 
now.getTime();    


// Epoch time, also referred to as zero time, is represented by the date string 
// 01 January, 1970 00:00:00 Universal Time (UTC), and by the 0 timestamp. 
console.log('\nnew Date(value)');
let epochTime = new Date(0); 
console.log(epochTime);   //1970-01-01T00:00:00.000Z
// Creates date based on milliseconds since Epoch time
epochTime = new Date(-100);
console.log(epochTime);

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
*/
console.log('\ndate-only forms "2011-10-10" are interpreted as a UTC time');
someTime = new Date('2011-10-10')  
console.log(someTime);

console.log('\ndate-time forms "2011-10-10T00:00:00" are interpreted as local time');
someTime = new Date('2011-10-10T00:00:00')   
console.log(someTime);

console.log('\ndate-time forms "October 10 2011 00:00" are interpreted as local time');
someTime = new Date("October 10 2011 00:00");
console.log(someTime);

console.log('\ndate-time form with milliseconds and time zone are interpreted as UTC time');
someTime = new Date("2011-10-10T00:00:00.000+01:00");
console.log(someTime);

/*
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
*/
console.log('\n year, monthIndex, day, h, m, s, ms "2011, 9, 10, 0, 0, 0, 0" are interpreted as local time');
someTime = new Date(2011, 9, 10, 0, 0, 0, 0);
console.log(someTime);

