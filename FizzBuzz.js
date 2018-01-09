function fizzBuzz(num){
    var i = 0;
    while (i<=num){
        if((i % 3 == 0) && (i % 5 == 0)){
            console.log('FizzBuzz');
            i++;
        }
        else if (i % 3 == 0){
            console.log('Fizz');
            i++;
        }

        else if (i % 5 == 0){
            console.log('Buzz');
            i++;
        }

        else {
            console.log(i);
            i++;
        }
    }
}

fizzBuzz(20);