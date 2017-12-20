
function confirmEnding(str, target) {
var a = str.length;
var b = target.length;
var sub = str.substring((a-b));
    if  ( sub == target){
        return true;
    }
    else return false;
}

console.log(confirmEnding("Bastian", "n"));