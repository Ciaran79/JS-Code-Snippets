

    function revrot(str, sz) {

        var count = 0;
        var result = "";
        var summed = 0;
        var numString = str.toString();

        while (count < numString.length){
        var chunk = numString.substring(count, count + sz);
        if (count > numString.length){
            break;
        }
        sumsquare(chunk);
        count = count + sz;


        function sumsquare(chunk) {
            for (let i = 0; i < chunk.length; i++) {
                summed = summed + Math.pow(numString.charAt(i), 2);
            }
    
            if (summed % 2 == 0) {
                result = result + numString.split("").reverse().join("");
            } else
                result = result + (numString.split("").push(numString.shift()).join());
        }
    }
        return result;
    
    }

console.log(revrot(2367846273, 6));