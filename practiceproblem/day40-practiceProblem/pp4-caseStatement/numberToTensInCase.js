const prompt = require('prompt-sync')();
//scan the number
const number = prompt('number = ');

switch(number){
    case "1":
        console.log("unit");
        break;
    case "10":
        console.log("ten");
        break;
    case "100":
        console.log("hundred");
        break;
    case "1000":
        console.log("thousand");
        break;
    case "10000":
        console.log("tenthousand");
        break;
    case "100000":
        console.log("1 milllion");
        break;
    case "1000000":
        console.log("ten million");
        break;
    default:
        console.log("invalid input");
        break;    
    
}
