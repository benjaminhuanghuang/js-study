/*
The computed date will be relative to your time zone.
Depending on your time zone, the result above will vary between March 24 and March 25.
*/ 

const dateStr = "2015-03-25"
let d1 = new Date(dateStr)
console.log(d1)


date = new Date(eventDate)
offset = date.getTimezoneOffset()
date = date.getTime() + (offset*60*1000)


