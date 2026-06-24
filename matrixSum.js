"use strict";
function matrixSum(nums) {
    let sum = 0;
    for (let i = 0; i < nums[0].length; i++) {
        let max = 0;
        for (let j = 0; j < nums.length; j++) {
            const row = nums[j];
            const tempMax = Math.max(...row);
            for (let k = 0; k < row.length; k++) {
                if (nums[j][k] === tempMax) {
                    nums[j][k] = -1;
                    break;
                }
            }
            max = Math.max(tempMax, max);
        }
        sum += max;
    }
    return sum;
}
;
console.log(matrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(matrixSum([[1, 2, 4], [3, 3, 1]]));
console.log(matrixSum([[10]]));
