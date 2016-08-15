'use strict';

class Person {

	constructor(fn, ln) {
		this._fn = fn;
		this._ln = ln;
	}

	static create(fullName) {
		return new Person(...fullName.split(' '));
	}

	get firstName() {
		console.log('get first name');
		return this._fn;
	}

	set firstName(value) {
		console.log('set first name');
		this._fn = value;
	}

	getFullName() {
		return this.fn + ' ' + this.ln;
	}

}

var p = new Person('Andrew', 'Conegliano');
console.log(p.firstName);
p.firstName = 'John';
console.log(p.firstName);

console.log(Person.create('Feddy Chalfoun').firstName);
