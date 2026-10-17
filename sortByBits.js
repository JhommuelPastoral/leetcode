function sortByBits(arr) {
    return arr.sort(function (a, b) { return bitCounter(a) - bitCounter(b) || a - b; });
}
;
function bitCounter(val) {
    var binary = val.toString(2);
    var counter = 0;
    for (var _i = 0, binary_1 = binary; _i < binary_1.length; _i++) {
        var bit = binary_1[_i];
        if (bit === '1')
            counter++;
    }
    return counter;
}
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
console.log(sortByBits([10000, 10000]));
console.log(sortByBits([2, 3, 5, 7, 11, 13, 17, 19]));
console.log(sortByBits([10, 100, 1000, 10000]));
