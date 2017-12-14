function memorysizeConversion(memorysize) {
    var newArray = memorysize.split(" ");
    var mult = 0;
    var end = "";

    switch (newArray[1]) {

        case 'KiB':
            end = 'kB';
            mult = 1.024;
            break;

        case 'kB':
            end = 'KiB';
            mult = 0.977;
            break;

        case 'TiB':
            end = 'TB';
            mult = 1.099511627776;
            break;

        case 'TB':
            end = 'TiB';
            mult = 0.9095;
            break;

        case 'GiB':
            end = 'GB';
            mult = 1.073741824;
            break;

        case 'GB':
            end = 'GiB';
            mult = 0.9313948205361199;
            break;

            case 'MiB':
            end = 'MB';
            mult = 1.048576;
            break;

            case 'MB':
            end = 'MiB';
            mult = 0.9536973047684865;
            break;
    }
var result = newArray[0] *  mult;
result = result.toFixed(3);
result = parseFloat(result);
    return result + " " + end;
}

console.log(memorysizeConversion("5.05 MiB"));