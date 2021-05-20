console.log("1.feet to inch\n2.feet to meter\n3.inch to feet\n4.meter to feet");
const prompt = require('prompt-sync')();
//scan value
const check = prompt('number = ');

//calculate the result
switch(check){
    case "1":
        const value1=prompt('feet =');
        const result1= value1*12;
        console.log(value1+" feet = "+result1+" inches");
        break;
    case "2":
        const value2=prompt('feet =');
        const result2= value2*0.3048;
        console.log(valu2+" feet = "+result2+" meters");
        break;
    case "3":
        const value3=prompt('feet =');
        const result3= value3/12;
        console.log(value3+" inch = "+result3+" feet");
        break;
    case "4":
        const value4=prompt('feet =');
        const result4= value4/0.3048;
        console.log(value4+" meter = "+result4+" feet");
        break;
    default:
        console.log("invalid operation");
        break;
}