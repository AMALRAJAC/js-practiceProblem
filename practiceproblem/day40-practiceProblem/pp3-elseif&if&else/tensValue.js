const prompt = require('prompt-sync')();
//scan the value
const value = prompt('value = ');

    if(value=="1"){
        console.log("unit");
    }
    else if(value=="10"){
        console.log("ten");
    }
    else if(value=="100"){
        console.log("hundred");
    }
    else if(value=="1000"){
        console.log("thousand");
    }
    else if(value=="10000"){
        console.log("ten thousand");
    }
    else if(value=="100000"){
        console.log("1 million");
    }
    else if(value=="10 million"){
        console.log("unit");
    }
    else if(value=="10000000"){
        console.log("1 billion");
    }
