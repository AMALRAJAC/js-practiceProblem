//declare array
var array=[];

      const prompt = require('prompt-sync')();
      //take the input value
      var num = prompt('number = ');

    //if 2 is a factor of number
    while (num % 2 === 0) {
        array.push(2);//push 2
        num = num / 2;
    }
    //print factors greater than 3
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            array.push(i);//push value
            num = num / i;
        }
    }
    //used to print the value its self
    if (num > 2) {
        array.push(num);//push number
    }
    //print array
    console.log(array);


   