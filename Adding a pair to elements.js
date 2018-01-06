function pairElement(str) {
   var  strArr = str.split("");
   strArr.forEach(element => {
       element.split("");
   });
   for (let i = 0; i < strArr.length; i++) {
    if(strArr[i] == 'G'){
        strArr[i] = strArr[i] + 'C';
        strArr[i] = strArr[i].split("");
    }
    else if(strArr[i] == 'C') {
        strArr[i] = strArr[i] + 'G';
        strArr[i] = strArr[i].split("");
    }
    else if(strArr[i] == 'A') {
        strArr[i] = strArr[i] + 'T';
        strArr[i] = strArr[i].split("");
       
   }
   else if (strArr[i] == 'T'){
    strArr[i] = strArr[i] + 'A';
    strArr[i] = strArr[i].split("");
   }
}
  
    return strArr;
  }

  
  console.log( pairElement("GCG"));
  
 