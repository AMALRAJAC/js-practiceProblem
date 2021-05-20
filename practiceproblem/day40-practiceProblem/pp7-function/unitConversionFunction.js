console.log("1.celecious to farenheat\n2.farenheat to celecious");
const prompt = require('prompt-sync')();
//read number
var num = prompt('number = ');
//constants
var degC=0;
var degF=0;
//switch case
switch(num){
case "1":
    degC = prompt('celecious = ');
    console.log(farenheat(degC));
    break;
case "2":
    degF=prompt('farenheat =');
    console.log(celecious(degF));
    break;

}
//function to convert degree farenheat to celecious
function celecious(degF){
    if(degF>32 && degF<212){
      return (degF-32)*(5/9)+" degC";
    }

}
//function to convert celecious to farenheat
function farenheat(degC){
if(degC>0 && degC<100){
      return degC*(9/5)+32+" degF";
}

}


