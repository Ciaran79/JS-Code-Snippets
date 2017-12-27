// function diffArray(arr1, arr2) {
//   var newArr = [];

//   arr1.forEach(element => {
//     var i = 0;
//     var toggle = true;
//     while (i < arr2.length) {
     
//       if (element == arr2[i]) {
//         toggle = false;
//         break;
//       }
//       i++;
//     }

//     if (toggle) {
//       newArr.push(element);
//     }


//   });

//   arr2.forEach(element => {
//     var i = 0;
//     var toggle = true;
//     while (i < arr1.length) {
      
//       if (element == arr1[i]) {
//         toggle = false;
//         break;

//       }
//       i++;
//     }

//     if (toggle) {
//       newArr.push(element);
//     }


//   });

//   return newArr;
// }


function diffArray (arr1, arr2) {
  var i = 0;
  var newArr = [];
  while (i<arr1.length){
    if (arr2.indexOf(arr1[i])<0){
      newArr.push(arr1[i]);
    }
    i++;
  }
  i = 0;
  while (i<arr2.length){
    if (arr1.indexOf(arr2[i])<0){
      newArr.push(arr2[i]);
    }
    i++;
  }


  return newArr;
}



console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));