const prompt = require('prompt-sync')();
//scan value of a
const a = prompt('value of a = ');
//scan value of b
const b = prompt('value of b = ');
//scan value of c
const c = prompt('value of c = ');

//operations
const result1=a+b*c;
const result2=a%b+c;
const result3=c+a/b;
const result4=a*b+c;
//print min and max value
console.log("max value="+Math.max(result1,result2,result3,result4));
console.log("min value= "+Math.min(result1,result2,result3,result4));