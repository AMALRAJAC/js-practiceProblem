//variables
var count1=0;
var count2=0;
var count3=0;
var count4=0;
var count5=0;
var count6=0;
//declare map
let dict=new Map;
//take count of values and push it into it
for(let i=0;count1<10&&count2<10&&count3<10&&count4<10&&count5<10&&count6<10;i++){
    var diceRoll=(Math.floor(Math.random()*10)%6)+1;

        switch(diceRoll){
            case 1:
                count1=count1+1;
                dict.set(1,count1);
                break;
            case 2:
                count2=count2+1;
                dict.set(2,count2);
                break;
            case 3:
                count3=count3+1;
                dict.set(3,count3);
                break;
            case 4:
                count4=count4+1;
                dict.set(4,count4);
                break;
            case 5:
                count5=count5+1;
                dict.set(5,count5);
                break;
            case 6:
                count6=count6+1;
                dict.set(6,count6);
                break;
            default:
                break;                        
        }  

}

//check for maximum and minimum
for([key,value] of dict){
    if(value==10){
        console.log(" max reached= "+key+" count = "+value);
    }else if(value==Math.min(...dict.values())){
        console.log(" min reached= "+key+" count = "+value);
    }
} 
