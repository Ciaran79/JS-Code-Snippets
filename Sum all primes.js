function sumPrimes(num) {
    var primes = [];
    for (let i = 2; i <= num; i++) {
        var prime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0){
               prime = false;
               break;
            }
        }
        if (prime == true){
        primes.push(i);
        }
      
    }
    return primes.reduce(function (total, num){return total+=num;});
  }
  
  console.log(sumPrimes(10));
  
  