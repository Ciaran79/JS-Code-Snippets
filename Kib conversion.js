function memorysizeConversion(memorysize) {
    var newArray = memorysize.split(" ");
    var mult = 0;
    var end = "";
    var toggle = 1;
    var result = "";

    switch (newArray[1]) {

        case 'KiB':
            end = 'kB';
            mult = 1.024;
            toggle = 1;
            break;

        case 'kB':
            end = 'KiB';
            mult = 1.024;
            toggle = 0;
            break;

        case 'TiB':
            end = 'TB';
            mult = 1.09951;
            toggle = 1;
            break;

        case 'TB':
            end = 'TiB';
            mult = 1.09951;
            toggle = 0;
            break;

        case 'GiB':
            end = 'GB';
            mult = 1.07374;
            toggle = 1;
            break;

        case 'GB':
            end = 'GiB';
            mult = 1.07374;
            toggle = 0;
            break;

        case 'MiB':
            end = 'MB';
            mult = 1.048576;
            toggle = 1;
            break;

        case 'MB':
            end = 'MiB';
            mult = 1.048576;
            toggle = 0;
            break;
    }

    if (toggle == 1) {
        result = newArray[0] * mult;
    } else {
        result = newArray[0] / mult;
    }

    result = result.toFixed(3);
    result = parseFloat(result);
    return result + " " + end;
}

console.log(memorysizeConversion("5.05 MiB"));