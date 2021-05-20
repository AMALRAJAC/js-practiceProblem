const prompt = require('prompt-sync')();
//enter power value
var num = prompt('number = ');
//constants
let result=0;
let i=0;
//restrict up to result value reach 256
while(result<256 &&i<=num ){
result=Math.pow(2,i);
console.log(result);
i++;

}