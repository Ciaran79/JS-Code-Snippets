function testFirstDigit(str, args){
    var first = /(\d)/.exec(str);
    var firstNum = Number(first[0]);
    if ((firstNum === arguments[1]) || (firstNum == arguments[2])){
        return true;
    }
    else {
        return false;
    }
}