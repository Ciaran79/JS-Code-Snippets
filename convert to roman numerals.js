function convertToRoman(num) {

    var newNum = num.toString();
    var numArray = newNum.split("");
    var numArrayRv = numArray.reverse();
    var romanArray = [];

    var numeralKey = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M"
    };
        
for (var i = 0; i < numArrayRv.length; i++) {
    var element = numArray[i];
    if (i == 0){
        element = numeralKey[element];
    }
    else if (i == 1){
        element = element + "0";
        element = numeralKey[element];
    }
    else if (i == 2){
        element = element + "00";
        element = numeralKey[element];
    }
    else {
        var count = element;
        element = numeralKey[1000];
        var j = 0;
        while (j<count-1){
            element += numeralKey[1000];
            j++;
        }
    }
    romanArray.unshift(element);   
}
    return romanArray.join("");
}

console.log(convertToRoman(3999));