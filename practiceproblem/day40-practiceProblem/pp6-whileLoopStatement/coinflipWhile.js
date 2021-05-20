//constants
const HEAD=0;
const TAIL=1;
var tail_count=0;
var head_count=0;
//restrict the count <11
while(tail_count<11 || head_count<11){
let check=Math.floor(Math.random()*10)%2;
switch(check){
    case HEAD:
        head_count++;
        console.log("head");
        break;
    case TAIL:
        tail_count++;
        console.log("tail");
        break;
}
}
//print the value which reach 11 first
if(head_count==11){
    console.log("head reach 11 first");
}else if(tail_count==11){
    console.log("tail reach 11 first");
}

