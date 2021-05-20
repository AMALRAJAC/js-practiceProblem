const prompt = require('prompt-sync')();
//scan number
const number = prompt('number = ');

switch(number){
    case "1":
        console.log("sunday");
        break;
    case "2":
        console.log("monday");
        break;
    case "3":
        console.log("tuesday");
        break;
    case "4":
        console.log("wednessday");
        break;
    case "5":
        console.log("thirsday");
        break;
    case "6":
        console.log("friday");
        break;
    case "7":
        console.log("saturday");
        break;
    default:
        console.log("invalid input");
        break;
    
}
