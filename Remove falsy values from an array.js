function bouncer(arr) {

    var newArr = arr.filter(checkFalsy);

    function checkFalsy(word) {
        if (word) {
            return word;
        }
    }
    return newArr;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));