"use strict";
function transformArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] % 2 === 0 ? 0 : 1;
    }
    return nums.sort((a, b) => a - b);
}
;
console.log(transformArray([3, 1, 2, 4]));
console.log(transformArray([1, 2, 3, 4]));
