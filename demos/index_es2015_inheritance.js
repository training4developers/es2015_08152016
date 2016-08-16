'use strict';

class Person {

	constructor(fn, ln) {
		this.fn = fn;
		this.ln = ln;
	}

	getFullName() {
		return this.fn + ' ' + this.ln;
	}

}

class Student extends Person {

	constructor(sid, fn, ln) {
		super(fn, ln);
		this.sid = sid;
	}

	getStudentInfo() {
		return this.sid + ' ' + this.fn + ' ' + this.ln;
	}
}

var p = new Person('Sebastian','Höffner');
console.log(p.getFullName());

var s = new Student('2', 'Vivek', 'Shah');
console.log(s.getFullName());

var pProto = Object.getPrototypeOf(p);
pProto.getFullName = function() {
	return 'Robin rocks!';
};

console.log(typeof Person);

console.log(s.getFullName());