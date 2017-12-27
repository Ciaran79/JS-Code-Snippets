

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {

  if (myObj.hasOwnProperty(checkProp)){

    var result = myObj[checkProp];
    
    return result;
  }
  
  else {
    return "Not Found";
  }
}


console.log(checkObj("gift"));
