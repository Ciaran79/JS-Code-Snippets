function convertHTML(str) {
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(/[&<>"']/.test(str)){
            if(element == '&'){
               str =  str.replace(element, '&amp;');
            }
            else if (element == '<'){
                  str =  str.replace(element, '&lt;');
                }
            
            else if (element == '>'){
               str = str.replace(element, '&gt;');
            }
            else if (element == '"'){
               str = str.replace(element, '&quot;');
            }
            else if (element == "'"){
               str = str.replace(element, '&apos;');
            }
        }
    }
   
    
    return str;
  }
  console.log(convertHTML("Sixty > twelve"));
  
  