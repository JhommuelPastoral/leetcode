"use strict";
function thirdMax(nums) {
    const arr = Array.from(new Set(nums.sort((a, b) => b - a)));
    return arr.length > 2 ? arr[2] : arr[0];
}
;
console.log(thirdMax([3, 2, 1])); // Output: 1
console.log(thirdMax([1, 2])); // Output: 2
