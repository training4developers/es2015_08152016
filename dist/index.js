'use strict';

var _helloWorld = require('./hello-world');

var _helloWorld2 = _interopRequireDefault(_helloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import React from './react';

console.log((0, _helloWorld.greeting)());
console.log((0, _helloWorld.goodbying)());

var p = new _helloWorld.Person();

_helloWorld2.default.doIt();
_helloWorld2.default.doSomething();