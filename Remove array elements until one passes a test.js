"use strict";

function dropElements(arr, func) {
    var newArr = arr.filter(func);
    if (newArr.length == 0){
        return newArr;
    }
   
    arr = arr.slice(arr.indexOf(newArr[0]));
    return arr;
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
  
