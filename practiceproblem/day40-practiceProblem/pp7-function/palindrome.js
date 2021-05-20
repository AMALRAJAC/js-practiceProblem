//constants
var rem, temp, final = 0;
const prompt = require('prompt-sync')();
//enter value
var number = prompt('number = ');

console.log(Palindrome(number));
//function which check the value prime or not
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
					return "The inputed number is Palindrome";
				}
				else
				{
					return "The inputted number is not palindrome";
				}
			}