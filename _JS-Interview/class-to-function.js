class Example {
    constructor() {
        this.name = 'Example';
    }

    func() {
        console.log(this.name);
    }
}


'use strict';

function Example(name) {
    if(!new.target) {
        throw new TypeError('constructor must be called with new');
    }
    this.name = 'Example';
}

Example.prototype.func = function() {
    console.log(this.name);
}

const e = new Example();
  