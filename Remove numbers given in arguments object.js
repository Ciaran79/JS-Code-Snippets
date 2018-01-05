function destroyer(arr) {

    var num = arguments.length;
    var allArgs = [];

    for (var i = 1; i < num; i++) {
        allArgs.push(arguments[i]);
    }

    function checkNum(x) {

        for (var j = 0; j < allArgs.length; j++) {
            if (x == allArgs[j]) {
                return false;
            }
        }
        return true;
    }

    return arr.filter(checkNum);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));