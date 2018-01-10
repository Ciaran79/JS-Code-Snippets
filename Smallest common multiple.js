"use strict";

function smallestCommons(arr) {

    arr = arr.sort(function (a, b) {
        return a > b;
    });
    var mult = arr[1] * 2;

    for (var i = arr[0]; i <= arr[1]; i++) {
        if (mult % i != 0) {
            mult = mult + 1;
            i = arr[0]-1;
        }
    }
    return mult;
}

console.log(smallestCommons([5, 1]));