function palindrome(str) {
<<<<<<< HEAD
var cleanString = str.toLowerCase();
cleanString = cleanString.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

var reversed = cleanString.split("").reverse().join("");


return cleanString == reversed;

}
console.log(palindrome("A man, a plan, a canal. Panama"));
=======
var cleanString = str.toLowerCase().split("").join("");
var patt = /a-z/g;
cleanString.match(patt);

 if (cleanString.split("").reverse().join("")==cleanString){
     return true;
 } 
 else {
     return false;
 }

}
console.log(palindrome("_EyE13"));
>>>>>>> 1f203d12d1d5e2f9a9603372e46d4d5fd070a656
