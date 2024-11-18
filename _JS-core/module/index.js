'use strict';

const firstMod = require('./first-module');
firstMod.doIt();


const configMod = require('./configurable-module');
const configuredA = configMod({logPrefix:'<A>'});
configuredA.log('test');

// import a property, use alias
const { doSomething , getItDone:git } = require('./first-module');
doSomething();
// getItDone();
git();