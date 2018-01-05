// function sumAll(){
//     var sum = 0;
//     for (var i =0; i<arguments.length; i++){
//          sum = sum + arguments[i];
//     }
//     return sum;

// }

// console.log(sumAll());



function sumAll(arr) {
  if (arr[0]>arr[arr.length-1]){
      arr = arr.reverse();
  }
    var i = arr[0];
     var result = 0;

     var max = arr[arr.length-1];
    
     
     while (i<=max){
       result += i;
       i++;
     }
     return result;
   
   }
   
  console.log(sumAll([4, 1])) ;