function uniteUnique(arr) {
  
    var newArr = [];
    for (var i = 0; i < arguments.length; i++) {
        newArr = newArr.concat(arguments[i]);
    }
    var curr;
    for (var j = 0; j < newArr.length; j++) {
        curr = newArr[j];
        for (var k = j+1; k < newArr.length; k++) {
            if(curr == newArr[k]){
                newArr.splice(k,1);
            }
        }
    }
    return newArr;
  }
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  
  
  