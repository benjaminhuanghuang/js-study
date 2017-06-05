// Template literals are enclosed by the back-tick (` `)

let server="google"
var message = `Connect on ${server}`;
console.log(message);


let data =["item1", "item2", "item3"]
console.log(`
    ${JSON.stringify(data)} were displayed.
`);

var t = `\`` === '`'; // --> true