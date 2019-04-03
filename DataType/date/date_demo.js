
// Set variable to current date and time
// This will be created according to the current computer's system settings.
const now = new Date();
// Get the current timestamp
// The output is a large number that appears the current timestamp 
now.getTime();    


// Epoch time, also referred to as zero time, is represented by the date string 
// 01 January, 1970 00:00:00 Universal Time (UTC), and by the 0 timestamp. 
const epochTime = new Date(0); 
console.log(epochTime);




// Creates date based on milliseconds since Epoch time
const someTime = new Data(-100);
// Creates date based on date string
const someTime = new Data("January 31 1980 12:30");
// Creates date based on specified date and time
const someTime = new Data(1776, 6, 4, 12, 30, 0, 0);

