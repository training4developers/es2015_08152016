'use strict';

function doIt() {
	console.dir(this);

	// var that = this;

	// function myFunc() {
	// 	console.dir(that);
	// }

	const myFunc = () => {
		console.dir(this);
	};

	myFunc();
}

//doIt();

var o = {
	doSomething: doIt
};

o.doSomething();

//console.log(o.doSomething === doIt);



