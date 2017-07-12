'use strict'

// define a generator (function)
function* g1() {
    console.log('hollo');
    yield 'Yield 1 Ran..';

    console.log('world');
    yield 'Yield 2 Ran..';

    console.log('return');
}

var g = g1();

console.log(g.next().value);
console.log(g.next()); // done!
console.log(g.next());
console.log(g.next());


function* neverEnding() {
    let index = 0;
    while (true) {
        yield index++;
    }
}