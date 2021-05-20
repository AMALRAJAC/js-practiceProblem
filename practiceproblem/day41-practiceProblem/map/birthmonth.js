//declare dictionary
let dict=new Map;

//get the random month value and store it in dictionary
for(let i=1;i<=50;i++){
    var month=(Math.floor(Math.random()*100)%12)+1;
    dict.set(i,month);
}
//print dictionary
console.log(dict.entries());
//check for same month
for(let [key1,value1] of dict){
    
    for(let [key2,value2] of dict){
        if(value1==value2){
            console.log(key1+" & "+key2+" has b day in same month ="+value1);
            
            
        }

    }
}
