'use strict';

var people = {};

// people[Symbol.iterator] = function *getPeople() {
// 	console.log('a');
// 	yield 'Bob';
// 	console.log('b');
// 	yield 'John';
// 	console.log('c');
// 	yield 'Tim';
// 	console.log('d');
// 	yield 'Mary';
// };

people.getPeople = function getPeople() {
	console.log('a');
	return ['Bob','John','Tim','Mary'];
};

for (const person of people.getPeople()) {
	console.log('loop');
	console.log(person);
}

var s = new Set();

s.add('blue');
s.add('red');
s.add(3);
s.add('red');

console.dir(s);



// var m = new Map();

// m.set('key1', 'value1');
// m.set('key2', 'value2');
// m.set('key3', 'value3');

// console.log(m.get('key1'));

// console.dir(m);

// for (const [key, value] of m) {
// 	console.log(`${key}=${value}`);
// }

// var o = {
// 	'key1': 'value1',
// 	'key2': 'value2',
// 	'key3': 'value3',
// };

// for (var key in o) {
// 	console.log(key + '=' + o[key]);
// }
