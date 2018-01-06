function titleCase(str) {

  str = str.split(" ");
  var newStr = [];
  var i = 0;
  while (i < str.length) {
    var item = str[i];
    var letter = item.charAt(0);
    letter = letter.toUpperCase();
    newStr.push(str[i].replace(str[i].charAt(0), letter));

    i++;
  }
  return newStr.join(" ");
}


console.log(titleCase("I'm a little tea pot"));