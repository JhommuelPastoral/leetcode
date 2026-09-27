"use strict";
function maxKDistinct(nums, k) {
    return Array.from(new Set(nums.sort((a, b) => b - a))).slice(0, k);
}
;
console.log(maxKDistinct([1, 2, 3, 4, 5], 3)); // [5, 4, 3]
console.log(maxKDistinct([5, 4, 3, 2, 1], 2)); // [5, 4]
