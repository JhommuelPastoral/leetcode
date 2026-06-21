function findMissingAndRepeatedValues(grid) {
    var res = [];
    var max = Math.max.apply(Math, grid.flat());
    var arr = new Array(max).fill(0);
    for (var _i = 0, grid_1 = grid; _i < grid_1.length; _i++) {
        var row = grid_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var col = row_1[_a];
            if (arr[col - 1])
                res.push(col);
            else
                arr[col - 1] = 1;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            res.push(i + 1);
            return res;
        }
    }
    res.push(max + 1);
    return res;
}
;
console.log(findMissingAndRepeatedValues([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
console.log(findMissingAndRepeatedValues([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
