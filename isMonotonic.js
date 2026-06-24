"use strict";
function isMonotonic(nums) {
    if (nums.length === 1)
        return true;
    let isIncreasing = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            isIncreasing = true;
            break;
        }
        else if (nums[i] === nums[i + 1])
            continue;
        else
            break;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        if (isIncreasing) {
            if (nums[i] > nums[i + 1])
                return false;
        }
        else {
            if (nums[i + 1] > nums[i])
                return false;
        }
    }
    return true;
}
;
console.log(isMonotonic([1, 2, 3]));
console.log(isMonotonic([6, 5, 4]));
console.log(isMonotonic([1, 3, 2]));
