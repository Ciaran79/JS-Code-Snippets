
function findLongestWord(str) {
    var arr = str.split(" ");
    var longest = arr[0];
    
    arr.forEach(function(val, index){if (val.length>longest.length){
        longest = arr[index];}});
    return longest;
  }

  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));