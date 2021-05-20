//constants
var check;
isleap=false;
//take input year
const prompt = require('prompt-sync')();
const yy = prompt('YEAR = ');

//check the yaer is leap year or not
if ((yy % 4) == 0 ){
   check= true;
        

        if ((yy % 400) == 0){ 
               check= true;
                if((yy % 100) == 0 ) {
                        check=false;
                }else{
                        check=true;
                }
            }
        }
        if(check==true){
            console.log("leap year");
        }else{
            console.log(" not a leap year");
        }
    



