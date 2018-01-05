
function titleCase(str) {
    
   var arr = str.split(" ");
   var newArr = arr.map(function(element) {return element.toLowerCase().replace(/[a-z]/i, function(x){return x.toUpperCase();}) ;});
   var result = newArr.join(" ");
    return result;
  }
  
 console.log(titleCase("sHoRt AnD sToUt"));
  
  