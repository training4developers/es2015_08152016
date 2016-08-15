'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var greeting = exports.greeting = function greeting() {
	return 'Hello World!';
};

var goodbying = exports.goodbying = function goodbying() {
	return 'Goodbye World!';
};

var Person = exports.Person = function Person() {
	_classCallCheck(this, Person);
};

exports.default = {

	doIt: function doIt() {
		console.log('did it');
	},

	doSomething: function doSomething() {
		console.log('did something');
	}

};