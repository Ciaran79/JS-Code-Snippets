function translatePigLatin(str) {
var lt = str.charAt(0)
    if (/[aeiou]/.test(lt)) {
        return str + "way";
    } else {          
            for (var i = 0; i <str.length; i++){
                var lr = str.charAt(0);
                if (/[aeiou]/.test(lr)) {
                    return str + "ay";
                   
                } else {
                    str = str + str.charAt(0);
                    str = str.slice(1);
                }

            }
            
        }
    }


console.log(translatePigLatin("arg"));