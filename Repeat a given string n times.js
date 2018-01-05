function repeatStringNumTimes(str, num) {
    var result="";
    if (num<0){
        return "";
    }
    else {
        var i = 0;
        while (i<num){
            result += str;
            i++;
        }
    }
    return result;
  }
  
 console.log(repeatStringNumTimes("abc", 3));
 