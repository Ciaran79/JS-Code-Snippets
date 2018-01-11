const binaryArrayToNumber = arr => {
  arr = arr.reverse();
  var result = 0;
  var mult = 1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]>0){
      result += mult;
    }
    mult = mult * 2;
  }
  return result;
};

console.log(binaryArrayToNumber([0, 1, 1, 0]));