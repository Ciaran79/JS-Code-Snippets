function truthCheck(collection, pre) {
    var result = true;

    for (var i = 0; i < collection.length; i++) {
        var val = collection[i][pre];
        if (pre in collection[i]) {
            if (val) {} else {
                result = false;
                return result;
            }
        } else {
            result = false;
            return result;
        }
    }
    return result;
}


console.log(truthCheck([{
    "name": "Pete",
    "onBoat": true
}, {
    "name": "Repeat",
    "onBoat": true
}, {
    "name": "FastFoward",
    "onBoat": null
}], "onBoat"));