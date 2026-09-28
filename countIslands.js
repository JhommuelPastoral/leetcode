function backTrack(grid, row, col, sum, seenPath) {
    if (!grid[row][col] || seenPath.has("".concat(row, "-").concat(col)))
        return sum;
    seenPath.add("".concat(row, "-").concat(col));
    sum += grid[row][col];
    var canUp = row - 1 >= 0 && !seenPath.has("".concat(row - 1, "-").concat(col));
    var canDown = row + 1 < grid.length && !seenPath.has("".concat(row + 1, "-").concat(col));
    var canRight = col + 1 < grid[row].length && !seenPath.has("".concat(row, "-").concat(col + 1));
    var canLeft = col - 1 >= 0 && !seenPath.has("".concat(row, "-").concat(col - 1));
    if (canUp)
        sum = backTrack(grid, row - 1, col, sum, seenPath);
    if (canDown)
        sum = backTrack(grid, row + 1, col, sum, seenPath);
    if (canRight)
        sum = backTrack(grid, row, col + 1, sum, seenPath);
    if (canLeft)
        sum = backTrack(grid, row, col - 1, sum, seenPath);
    return sum;
}
function countIslands(grid, k) {
    var res = 0;
    var seenPath = new Set();
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (!grid[i][j] || seenPath.has("".concat(i, "-").concat(j)))
                continue;
            var sum = backTrack(grid, i, j, 0, seenPath);
            if (sum % k === 0)
                res++;
        }
    }
    return res;
}
;
console.log(countIslands([[1, 0, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]], 2)); // Output: 1
console.log(countIslands([[1, 0, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]], 3)); // Output: 1
console.log(countIslands([[1, 0, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]], 4)); // Output: 1
