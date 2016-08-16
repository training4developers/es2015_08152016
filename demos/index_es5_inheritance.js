'use strict';

function Person(fn, ln) {
	this.fn = fn;
	this.ln = ln;
}

Person.prototype.getFullName = function() {
	return this.fn + ' ' + this.ln;
};

function Student(sid, fn, ln) {
	Student.prototype._super.call(this, fn, ln);
	this.sid = sid;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype._super = Person;

Student.prototype.getStudentInfo = function() {
	return this.sid + ' ' + this.fn + ' ' + this.ln;
};


var p = new Person('Bob','Martin');
var p2 = new Person('Bob','Martin');
console.log(p.getFullName());
console.log(p.getFullName === p2.getFullName);

console.log(Object.getPrototypeOf(p) === Person.prototype);

var s = new Student(1, 'Fan', 'Gabbett');
console.log(s.getStudentInfo());
console.log(s.getFullName());

//console.dir(p);

console.log(typeof Person);
