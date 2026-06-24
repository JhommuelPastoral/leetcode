"use strict";
function findMissingAndRepeatedValues(grid) {
    const res = [];
    const max = Math.max(...grid.flat());
    const arr = new Array(max).fill(0);
    for (const row of grid) {
        for (const col of row) {
            if (arr[col - 1])
                res.push(col);
            else
                arr[col - 1] = 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
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
