'use strict';

function t(f, s, ...p) {

	//console.dir(arguments);
	//console.log(arguments[2]);
	console.log(p instanceof Array);
	console.dir(f);
	console.dir(s);
	console.dir(p);

}

t(...['a','b','c','d','e']);
