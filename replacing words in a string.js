function myReplace(str, before, after) {
  
    if (before.charAt(0)== before.charAt(0).toUpperCase()){
      after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());     
    }
    
    str = str.replace(before, after);
    return str;
  }

  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  
  