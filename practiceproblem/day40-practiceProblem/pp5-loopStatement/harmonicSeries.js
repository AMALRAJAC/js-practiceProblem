
const prompt = require('prompt-sync')();
//take the input value
const n = prompt('number = ');
var s= "";
//take the harmonic series
for(let i=1;i<=n;i++){

    s +="( 1 / "+ i + " ) + "+" ";
    
}
//print harmonic series 
console.log("Hn = "+s);