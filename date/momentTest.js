const moment = require('moment');

const now = moment();   // current local time
const startUTC = now.startOf('day').utc().format();
const tomorrow = now.add(1, 'd');
console.log("tomorrow", tomorrow);
const endUTC = tomorrow.startOf('day').utc().format();

// use variable now will cause different result.
const endUTC2 = moment().endOf('day').utc().format();


console.log("start UTC: ", startUTC);

console.log("end UTC: ", endUTC);
console.log("end UTC2: ", endUTC2);
