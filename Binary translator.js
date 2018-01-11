function binaryAgent(str) {

str = str.split(" ");

function reverseString(str) {
    return str.split("").reverse().join("");
}

const binaryNumberToInt = x => {
    x = reverseString(x);
    var result = 0;
    var mult = 1;
  
    for (var i = 0; i < x.length; i++) {
      if (x[i]>0){
        result += mult;
      }
      mult = mult * 2;
    }
    return result;
  };

for (var i = 0; i < str.length; i++) {
    str[i] = binaryNumberToInt(str[i]);
    str[i] = String.fromCharCode(str[i]);
    
}
str = str.join("");

    return str;
  }
  

  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
  
  