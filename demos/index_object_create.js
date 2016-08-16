'use strict';

console.dir(this);

var p = {
	walk: function() {
		console.log(`walking: ${this.distance}`);
	}
};

var k = Object.create(p);

k.distance = 10;
k.walk();

var e = Object.create(p);
e.distance = 4;
e.walk();

console.log(k.walk === e.walk);

