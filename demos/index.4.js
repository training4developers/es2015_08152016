'use strict';

const colors = ['red','blue','green','yellow','black'];

const [firstColor, secondColor, thirdColor, ...otherColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(otherColors);

const stuff = [0, true, 'test', { id: 2}, function() {

}, []];

console.dir(stuff);