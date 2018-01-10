function steamrollArray(arr) {
   for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
       if (arr[i].length<=1) {
           arr.splice(charAt(arr[i][0]) , 1);
    }
}
   }
    return arr;
  
}
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  
  