function memorysizeConversion (memorysize){
var newArray = memorysize.split(" ");
var mult = 0;

if (memorysize[1].indexOf("i")!=-1){
    mult = 1.024;
}
else {
    mult = 0.931;
}

  return memorysize[0] * mult;
}

console.log(memorysizeConversion("2 kb"));