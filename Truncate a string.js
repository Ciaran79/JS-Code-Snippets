function truncateString(str, num) {
if(num<=3){
    return str.substring(0, num) + "...";
}    

   else if (str.length> num){
        return str.substring(0, num-3) + "...";
    }
    else {
        return str;
    }
  }
  
console.log(truncateString("A-t", 1));
 