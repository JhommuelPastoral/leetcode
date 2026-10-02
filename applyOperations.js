"use strict";
function applyOperations(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (!nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            else
                break;
        }
    }
    return nums;
}
;
console.log(applyOperations([1, 2, 2, 1, 1, 0])); // Output: [4, 2, 0, 0, 0, 0]
console.log(applyOperations([0, 1])); // Output: [1, 0]
console.log(applyOperations([2, 2, 0, 4, 0, 8])); // Output: [4, 4, 8, 0, 0, 0]
