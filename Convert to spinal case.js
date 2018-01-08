
function spinalCase(str) {
    
   for (let i = 0; i < str.length; i++) {
      var previousElement = str[i-1];
       const element = str[i];
       if((/[A-Z]/.test(element)) && !(/[\s]/.test(previousElement)) && previousElement != undefined && previousElement!= '-'){
        str = str.replace(element, element.toLowerCase());
        str = str.substring(0, i) + '-' + str.substring(i);
        
       }
       if(/[\s_]/.test(element)){
           str = str.replace(element, '-');
       }
       
  
    }
    return str.toLowerCase();
  }
  
  console.log(spinalCase('ThisIs Spinal Tap'));
  
  
  