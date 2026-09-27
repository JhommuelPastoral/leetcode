"use strict";
function backTrack(grid, row, col, res, path, sum) {
    if (!grid[row][col] || path.has(`${row}-${col}`)) {
        if (!res.length)
            res.push(sum);
        else if (sum > res[0])
            res[0] = sum;
        return res;
    }
    path.add(`${row}-${col}`);
    sum += grid[row][col];
    const canUp = row - 1 >= 0 &&
        !path.has(`${row - 1}-${col}`);
    const canDown = row + 1 < grid.length &&
        !path.has(`${row + 1}-${col}`);
    const canRight = col + 1 < grid[row].length &&
        !path.has(`${row}-${col + 1}`);
    const canLeft = col - 1 >= 0 &&
        !path.has(`${row}-${col - 1}`);
    if (canUp)
        backTrack(grid, row - 1, col, res, path, sum);
    if (canDown)
        backTrack(grid, row + 1, col, res, path, sum);
    if (canRight)
        backTrack(grid, row, col + 1, res, path, sum);
    if (canLeft)
        backTrack(grid, row, col - 1, res, path, sum);
    // Backtrack
    path.delete(`${row}-${col}`);
    // Important: if there was nowhere to go,
    // this current sum is the maximum for this path.
    if (!canUp && !canDown && !canRight && !canLeft) {
        if (!res.length)
            res.push(sum);
        else if (sum > res[0])
            res[0] = sum;
    }
    return res;
}
function getMaximumGold(grid) {
    let max = -Infinity;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (!grid[i][j])
                continue;
            max = Math.max(max, backTrack(grid, i, j, [], new Set(), 0)[0]);
            // console.log(backTrack(grid, i, j, [], new Set<string>(), 0));
        }
    }
    return Number.isInteger(max) ? max : 0;
}
;
console.log(getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]])); // 24
console.log(getMaximumGold([[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]])); // 28
console.log(getMaximumGold([[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]])); // 28
