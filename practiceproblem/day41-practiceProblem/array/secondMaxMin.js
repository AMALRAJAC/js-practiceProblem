//define array
let array=[];
//take 10 random vaues
for(let i=0;i<10;i++){
    let value=(Math.floor(Math.random()*1000)%900)+99;
    
    array.push(value);//push values into array
};
//check the second largest element from array
for(let i=0;i<10;i++){
    if(first<array[i]){
        second=first;
        first=array[i];
    }else if(array[i]>second && array[i] != first){
        second=array[i];
    }

}
if(second==first){
    console.log("no second largest element");
}else{
    console.log("second largest element is "+second);
}
//check the second smallest element from array
let first_min=array[0];

for(let i=0;i<10;i++){
    if(first_min>array[i]){
        
        first_min=array[i];
    }
}
let second_min=array[0];
for(let j=0;j<10;j++){
    if(array[j]<second_min && array[j] != first_min){
        second_min=array[j];
    }

}

if(second_min==first_min){
    console.log("no second smallest element");
}else{
    console.log("second smallest element is "+second_min);
}


