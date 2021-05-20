// program to check if a number is prime or not

// take input from the user
var rem, temp, final = 0;
const prompt = require('prompt-sync')();
var number = prompt('number = ');
let isPrime = true;
let check=0;

console.log(prime(number));
console.log(prime(Palindrome(number)));

function prime(number){

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        return "prime number";
        
    } else {
        return "not a prime number";
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
   
}


function Palindrome(number)
			{
				

				temp = number;
				while(number>0)
				{
					rem = number%10;
					number = parseInt(number/10);
					final = final*10+rem;
				}
				if(final==temp)
				{
					return temp;

				}
				
			}