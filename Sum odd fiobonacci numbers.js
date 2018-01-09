'use strict';

function sumFibs(num) {
   var fibNums = [1,1];
    var i =0;
    var curr = fibNums[fibNums.length-1];

    while(curr<=num){
       
     var fib = curr+fibNums[fibNums.length-2];
      if (fib<=num){
        fibNums.push(fib);
      }     
      curr=fib;
    }

    var result = fibNums.filter(function(x){return x % 2 != 0;});
var finalArr = result.reduce(function (total,num){return total+=num;});
    return finalArr;
  }
  
  console.log(sumFibs(10));
  
  