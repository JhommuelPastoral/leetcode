function sortByBits(arr) {
    var map = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var val = arr_1[_i];
        var binary = val.toString(2);
        var bitCounter = 0;
        for (var _a = 0, binary_1 = binary; _a < binary_1.length; _a++) {
            var bit = binary_1[_a];
            if (bit === '1')
                bitCounter++;
        }
        map.push([val, bitCounter]);
    }
    var sorted = map.sort(function (a, b) { return a[1] - b[1] || a[0] - b[0]; }).map(function (val) { return val[0]; });
    return sorted;
}
;
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
console.log(sortByBits([10000, 10000]));
console.log(sortByBits([2, 3, 5, 7, 11, 13, 17, 19]));
console.log(sortByBits([10, 100, 1000, 10000]));
