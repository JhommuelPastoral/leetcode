"use strict";
function dominantIndex(nums) {
    if (nums.length === 1)
        return 0;
    const sorted = [...nums].sort((a, b) => b - a);
    if (sorted[0] >= sorted[1] * 2) {
        return nums.indexOf(sorted[0]);
    }
    return -1;
}
console.log(dominantIndex([3, 6, 1, 0]));
