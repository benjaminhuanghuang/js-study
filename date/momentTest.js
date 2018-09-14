const moment = require('moment');

const d1 = moment();
console.log(d1);    // local time
console.log("UTC time: ", d1.utc().format());    // local time

const d2 = d1.add(1, 'd');
console.log(d2);