function mutation(arr) {

    var check = true;

    for (var i = 0; i < arr[1].length; i++) {
        check = true;
        let letter = arr[1].charAt(i).toLowerCase();
        let checkLetter = arr[0].toLowerCase().indexOf(letter);
        if (checkLetter >= 0) {
            

        } else {
           check = false;
            break;
        }
    }

    return check;
}

console.log(mutation(["hello", "neo"]));