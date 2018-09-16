const moment = require('moment');

const now = moment();   // current local time
const startUTC = now.startOf('day').utc().format();
const tomorrow = now.add(1, 'd');
const endUTC = tomorrow.startOf('day').utc().format();



console.log("start UTC: ", startUTC);

console.log("end UTC: ", endUTC);
