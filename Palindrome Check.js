function palindrome(str) {
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