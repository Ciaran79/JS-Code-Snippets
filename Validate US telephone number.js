function telephoneCheck(str) {
    var regExPatt = /\d?\s?-?\(?(\d){3}\)?\s?-?(\d){3}\s?-?(\d){4}/;

    if (testFirstDigit(str, 1, 5)) {
        if (str.indexOf("(") != -1) {
            if (matchingBracket(str, str.indexOf("("))) {
                if (regExPatt.test(str)) {
                    return true;
                }
            } else {
                return false;
            }
        } else if (str.indexOf(")") != -1) {
            return false;
        } else {
            if (regExPatt.test(str)) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}


console.log(telephoneCheck("(5505552368)"));

function matchingBracket(str, idx) {
    let arr = str.split('');
    let count = 0;
    if (idx > arr.length || idx < 0 || arr.length <= 1 || arr[idx] != "(") {
        return -1;
    }
    for (i = idx; i < arr.length; i++) {

        if (arr[i] == "(") {
            count++;
        } else if (arr[i] == ")") {
            count--;
        }
        if (count == 0 && arr[i] == ")") {
            return i;
        }
    }
    return -1;
}

function testFirstDigit(str, args) {
    var first = /(\d)/.exec(str);
    var firstNum = Number(first[0]);
    if ((firstNum === arguments[1]) || (firstNum == arguments[2])) {
        return true;
    } else {
        return false;
    }
}