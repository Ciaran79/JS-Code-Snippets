function addTogether() {
    //   console.log(arguments);

    if (arguments.length === 1) {
        if (typeof arguments[0] != "number") {
            return undefined;
        } else {
            var a = arguments[0];
        }

        return function (b) {
            if(typeof b !=='number'){
                return undefined;
            }
           else {
            return a + b;
           }
             
            

        };

    } else if (arguments.length === 0) {
        return undefined;
    } else {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] != "number") {
                return undefined;
            }
        }
        return arguments[0] + arguments[1];
    }


}


console.log(addTogether(2)(5));