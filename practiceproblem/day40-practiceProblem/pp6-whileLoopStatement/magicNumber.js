//constants
let upper=100;
let lower=0;
const prompt = require('prompt-sync')();
//scan the number
var num = prompt('number = ');
//reach to magic number
while(upper>lower){
    let mid=Math.floor((lower + upper)/2);//calculate mid value
      if(mid==num){
          console.log("magic number="+mid);
          break;
      }
      else if(num>mid){
          lower=mid+1;//update lower

      }else{
           upper=mid;//update upper
      }
}