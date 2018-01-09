
function convertHTML(str) {
    
    if (str.indexOf('&')!=-1){
     str =   str.replace('&', '&amp;');
    
    }

    if (str.indexOf('<')!=-1){
        str =    str.replace('<', '&lt;');
    
    }

    if(str.indexOf('>')!=-1){
        str =     str.replace('>', '&gt;');
    }

    if (str.indexOf('"')!=-1){
        str =    str.replace('"', '&quot;');

    }

    if (str.indexOf("'")!=-1){
        str =     str.replace("'", '&apos;');
    }


    return str;
  }
  
  console.log(  convertHTML("Hamburgers < Pizza < Tacos"));
  
