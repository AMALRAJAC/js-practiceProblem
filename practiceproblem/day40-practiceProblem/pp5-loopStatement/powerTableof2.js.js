
const prompt = require('prompt-sync')();
//enter the power range
const n = prompt('number = ');
//print the table
for(let i=0;i<=n;i++){
    
    console.log("2 ^ "+i+" = "+Math.pow(2,i));
}