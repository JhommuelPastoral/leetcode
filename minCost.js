"use strict";
function backTrack(row, col, targetRow, targetCol, colCosts, rowCosts, cost, res, path) {
    if (row === targetRow && col === targetCol) {
        if (!res.length)
            res.push(cost);
        else {
            if (cost < res[0])
                res[0] = cost;
        }
        return res;
    }
    path.add(`${row}-${col}`);
    const canUp = row - 1 >= 0 && !path.has(`${row - 1}-${col}`);
    const canDown = row + 1 < rowCosts.length && !path.has(`${row + 1}-${col}`);
    const canLeft = col - 1 >= 0 && !path.has(`${row}-${col - 1}`);
    const canRight = col + 1 < colCosts.length && !path.has(`${row}-${col + 1}`);
    if (canUp) {
        backTrack(row - 1, col, targetRow, targetCol, colCosts, rowCosts, cost + rowCosts[row - 1], res, path);
    }
    if (canDown) {
        backTrack(row + 1, col, targetRow, targetCol, colCosts, rowCosts, cost + rowCosts[row + 1], res, path);
    }
    if (canRight) {
        backTrack(row, col + 1, targetRow, targetCol, colCosts, rowCosts, cost + colCosts[col + 1], res, path);
    }
    if (canLeft) {
        backTrack(row, col - 1, targetRow, targetCol, colCosts, rowCosts, cost + colCosts[col - 1], res, path);
    }
    path.delete(`${row}-${col}`);
    return res;
}
function minCost(startPos, homePos, rowCosts, colCosts) {
    let cost = 0;
    let [startRow, startCol] = startPos;
    let [targetRow, targetCol] = homePos;
    const res = backTrack(startRow, startCol, targetRow, targetCol, colCosts, rowCosts, cost, [], new Set());
    return res[0];
}
;
console.log(minCost([3, 0], [4, 1], [10, 5, 6, 7, 11], [4, 19, 13, 16, 29, 28, 22, 13])); // Output: 30
