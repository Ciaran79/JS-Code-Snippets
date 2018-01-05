// function factorial(n) {
//     var result = n;

//     if ((n < 0) || (n > 12)) throw RangeError();

//     if (n == 0) {
//         return 1;
//     }

//     while (n > 1) {
//         var result = result * (n - 1);
//         n--;
//     }
//     return result;
// }

// console.log(factorial(-12));




function factorialize(num) {
    var result = 1;
    var i =1;
    while (i<=num){
      result = result * i;
      i++;
    }
    
    return result;
  }
  
  factorialize(5);