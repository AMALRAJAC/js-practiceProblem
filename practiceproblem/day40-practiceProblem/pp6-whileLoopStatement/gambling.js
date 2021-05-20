//constants
var cash=100;
var goal=200;
const bet =1;
//play gambling
 while(cash <goal && cash>bet){
     let check=Math.floor(Math.random()*10)%2;
     if(check==1){
         cash=cash+(bet*2);
     }else{
         cash=cash-(bet*2);
     }
 }
 //print the player status
 if(cash>=goal){
     console.log("player won");
 }else if(cash<goal){
     console.log("player loose");
 }