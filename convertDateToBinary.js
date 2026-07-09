function convertDateToBinary(date) {
    var arr = date.split('-');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Number.parseInt(arr[i]).toString(2);
    }
    return arr.join('-');
}
;
console.log(convertDateToBinary('2023-06-15')); // "11111100111-110-1111"
console.log(convertDateToBinary('1999-12-31')); // "11111001111-1100-11111"
