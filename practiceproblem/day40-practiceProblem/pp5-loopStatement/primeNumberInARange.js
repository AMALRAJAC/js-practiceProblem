const prompt = require('prompt-sync')();
//enter the minimum range
const min = prompt('number = ');
//enter the maximum range
const max = prompt('number = ');
let flag=0;
let n=0;


//calclute prime number with in the range
for(let i=min;i<max;i++){
    if(i==1){
        console.log("not a prime number");
    }
    else{
        
        for(let j=2;j<i;j++){
            if(i%j==0){
               flag=1;
                break;
            }else{
               flag=0;
            
            }
        }
        if(flag ==0){
            console.log("prime number -> "+i);
        }
    
    }
}
