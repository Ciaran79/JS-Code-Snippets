function whatIsInAName(collection, source) {

  var arr = [];
  var keys = Object.keys(source);

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(keys[0])) {
      if (collection[i][keys[0]] == source[keys[0]]) {
        if (collection[i][keys[1]] == source[keys[1]]) {
          arr.push(collection[i]);
        }
      }
    }
  }
  return arr;
}


console.log(whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  first: "Tybalt",
  last: "Capulet"
}));