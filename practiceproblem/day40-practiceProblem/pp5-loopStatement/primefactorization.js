
      const prompt = require('prompt-sync')();
      //take the input value
      var num = prompt('number = ');

    //if 2 is a factor of number
    while (num % 2 === 0) {
        console.log(2);
        num = num / 2;
    }
    //print factors greater than 3
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            console.log(i);
            num = num / i;
        }
    }
    //used to print the value its self
    if (num > 2) {
        console.log(num);
    }


   