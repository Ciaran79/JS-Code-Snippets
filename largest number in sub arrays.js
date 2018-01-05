function largestOfFour(arr) {

    var largestNumber = [];
    

    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var y = 0; y < arr[i].length; y++) {
            if (arr[i][y]>count){
                count = arr[i][y];              
            }
        }
        largestNumber.push(count);        
    }
    return largestNumber;
}
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

