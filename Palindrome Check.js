function palindrome(str) {
var cleanString = str.toLowerCase();
cleanString = cleanString.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

var reversed = cleanString.split("").reverse().join("");


return cleanString == reversed;

}
console.log(palindrome("A man, a plan, a canal. Panama"));