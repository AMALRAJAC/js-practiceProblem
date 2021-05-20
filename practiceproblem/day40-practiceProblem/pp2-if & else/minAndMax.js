
const prompt = require('prompt-sync')();
//first number
const numner1 = prompt('FIRST NUMBER = ');
//second number
const numner2 = prompt('SECOND NUMBER = ');
//third number
const numner3 = prompt('THIRD NUMBER = ');
//fourth numbre
const numner4 = prompt('FOURTH NUMBER = ');
//fifth number
const numner5 = prompt('FIFTH NUMBER = ');
//take the maximum value
var max=Math.max(numner1,numner2,numner3,numner4,numner5);
console.log("max value = "+max);
//take the minimum value
var min=Math.min(numner1,numner2,numner3,numner4,numner5);
console.log("min value = "+min);

