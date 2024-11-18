/*
    Modules are singleton.
    The singleton pattern allows data to be shared between components of an application 
*/
'use strict';

const firstMod1 = require('./first-module');
const firstMod2 = require('./first-module');
console.log(firstMod1 === firstMod2);

// share data between components
firstMod1.put("Hello");
console.log(firstMod2.get());