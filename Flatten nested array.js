function steamrollArray(arr) {
    var newArr =[];
   for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
        if(arr[i].length<1){
            var blankArr = [];
            newArr.push(blankArr);
        
        }
        else {
            arr[i] = arr[i].join();
            arr[i] = arr[i].split(",");
            var arrStr = arr[i];
            for (let i = 0; i < arrStr.length; i++) {
                if(typeof(arrStr[i])=== Number){
                 arrStr[i] = Number(arrStr[i]);
                }
                
            }
            newArr = newArr.concat(arrStr);
        }
     
      
    }
    else{
        newArr.push(arr[i]);
    }
   }
    return newArr;
  
}
  
  console.log(steamrollArray([1, [], [3, [[4]]]]));
  
  