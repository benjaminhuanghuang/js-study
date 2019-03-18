// data string are treated as UTC, not local.
let timeString = '2018-09-01T15:00:00';
let date = new Date(timeString);   //data string are treated as UTC, not local.
console.log(date);
console.log(date.toISOString()); //The timezone is always zero UTC offset, as denoted by the suffix "Z".
console.log(date.toString());


timeString = '2018-09-01T15:00:00Z';
date = new Date(timeString);
console.log(date);
console.log(date.toISOString()); //The timezone is always zero UTC offset, as denoted by the suffix "Z".
console.log(date.toString());

//
console.log('---- Test 2');
let now = new Date();
console.log(now);  // utc value
console.log(now.toISOString());
console.log(now.toString());    // local
