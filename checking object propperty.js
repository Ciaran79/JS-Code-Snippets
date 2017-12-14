
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)){

    var result = myObj[checkProp];
    
    return result;
  }
  
  else {
    return "Not Found";
  }
}

// Test your code by modifying these values
console.log(checkObj("gift"));
