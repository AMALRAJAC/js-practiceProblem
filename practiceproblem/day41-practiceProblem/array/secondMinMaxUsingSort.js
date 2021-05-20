//declare array
let array=[];
//push values to array
for(let i=0;i<10;i++){
    let value=(Math.floor(Math.random()*1000)%900)+99;
    
    array.push(value);
};

console.log(array);
//sort array
array.sort();
console.log(array);
//print second largest and smallest element by indexeds
console.log("second largest element="+array[8]);
console.log("second smallest element="+array[1]);

