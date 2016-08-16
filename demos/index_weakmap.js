'use strict';

const person = {
	firstName: 'Bob',
	lastName: 'Martin',
	address: { 
		street: '123 Oak Lane'
	}
};

Object.freeze(person);

const personMetaData = new WeakMap();

personMetaData.set(person, {
	middleName: 'Stuart'
});

//person.firstName = 'Vamsi';
//person.middleName = 'Stuart';
person.address.street = 'Elm St';