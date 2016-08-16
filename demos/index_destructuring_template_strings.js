'use strict';

const person = {
	firstName: 'Bob',
	lastName: 'Martin'
};

const printFullName = ({ firstName, lastName }) => {
	console.log(`
	
	
	${String(firstName).toUpperCase()}
	
${lastName}`);
};

const { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);

const { firstName: fn, lastName: ln } = person;

console.log(fn);
console.log(ln);

printFullName(person);
//printFullName('hello','world');
