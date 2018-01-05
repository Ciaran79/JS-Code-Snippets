 function rot13(str) {

     var newStr = "";
     var newCode;
     for (var index = 0; index < str.length; index++) {
         var element = str[index];
         if (/([A-Z])/.test(element)) {
             var code = element.charCodeAt(0);
             if (code < 78) {
                 newCode = (code - 13) + 26;
             } else {
                 newCode = code - 13;
             }
             var newElement = String.fromCharCode(newCode);
             newStr += newElement;
         } else {
             newStr += element;
         }
     }
     return newStr;
 }
 console.log(rot13("SERR PBQR PNZC"));