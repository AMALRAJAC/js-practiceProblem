const prompt = require('prompt-sync')();
console.log("1.january\n2.februvary\n3.march\n4.april\n5.may\n6.june\n7.july\n8.august\n9.september\n10.october\n11.november\n12december");
//scan month
var Month = prompt('Month = ');
//scan date
var Date = prompt('Date = ');


if (Month<="6" && Date<="20"){
        console.log("true");
}

else if ((Month >= "3" && Month < "6") && (Date<"31") ){
    console.log("true");
}

else{
    console.log("false");
}


