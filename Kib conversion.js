function memorysizeConversion (memorysize){
var newArray = memorysize.split(" ");
var mult = 0;

if (newArray[1].indexOf("i")!=-1){
    mult =1.024 ;
}
else {
    mult = 0.976;
}
var result = "";

switch (newArray[1]) {
    case "kB":
    result = "KiB";
    break;
    case "KiB":
    result = "kB";
    break;
    case "GB":
    result = "GiB";
    break;
    case "GiB":
    result = "GB";
    break;
}

var num = newArray[0];
  return (num * mult) + " " + result;
}

console.log(memorysizeConversion("57.48 MiB"));