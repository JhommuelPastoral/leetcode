function oddCells(m, n, indices) {
    var grid = Array.from({ length: m }, function () { return Array(n).fill(0); });
    var res = 0;
    for (var _i = 0, indices_1 = indices; _i < indices_1.length; _i++) {
        var _a = indices_1[_i], row = _a[0], col = _a[1];
        // row
        for (var i = 0; i < n; i++) {
            var prev = grid[row][i];
            grid[row][i] += 1;
            if (prev % 2 === 0 && grid[row][i] % 2 !== 0)
                res++;
            else if (prev % 2 !== 0 && grid[row][i] % 2 === 0)
                res--;
        }
        // col 
        for (var j = 0; j < m; j++) {
            var prev = grid[j][col];
            grid[j][col] += 1;
            if (prev % 2 === 0 && grid[j][col] % 2 !== 0)
                res++;
            else if (prev % 2 !== 0 && grid[j][col] % 2 === 0)
                res--;
        }
    }
    return res;
}
;
console.log(oddCells(2, 3, [[0, 1], [1, 1]]));
console.log(oddCells(2, 2, [[1, 1], [0, 0]]));
