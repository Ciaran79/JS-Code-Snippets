function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var chunk = [];


  for (var i = 0; i < arr.length; i++) {

    if (chunk.length < size) {
      chunk.push(arr[i]);
    } else {
      newArr.push(chunk);
      chunk = [];
      chunk.push(arr[i]);
    }
  }
  newArr.push(chunk);
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));