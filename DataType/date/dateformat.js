const moment = require('moment');

let dt1 = new Date()    // current UTC time
console.log(dt1)

let dt2 = Date(823230245000)    // Date() function ignore the argumant and ALWAYS return current LOCAL time
console.log(dt2)

let dt3 = Date(1568828905000)   // Same as Date(823230245000)
console.log(dt3)



let dt4 = new Date(1568828905000)
console.log(dt4)
console.log('To string of dt4: ',dt4.toString())
console.log('UTC string of dt4: ',dt4.toUTCString())
console.log('Local string of dt4: ', dt4.toLocaleString())

let mt =  moment(dt4)
console.log(mt)