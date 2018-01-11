function steamrollArray(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (arr[i].length > 0) {
        arr[i] = arr[i].join();
        arr[i] = arr[i].split(",");
        var arrStr = arr[i];
        for (let j = 0; j < arrStr.length; j++) {
          if (/[0-9]/.test(arrStr[j])) {
            arrStr[j] = Number(arrStr[j]);
          }

        }
        newArr = newArr.concat(arrStr);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(steamrollArray([
  [
    ["a"]
  ],
  [
    ["b"]
  ]
]));