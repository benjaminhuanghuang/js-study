// src --out-dir dist --presets=es2015
const test= "test";


import {B} from './es6-module';
var b = new B();
b.doIt();

import {getAll, add} from './widgets';
add({name:"first widget", color:'red', size:"large"});
console.log(getAll().length);

import widget from './widgets2'
