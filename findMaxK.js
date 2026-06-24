"use strict";
function findMaxK(nums) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let max = -1;
    while (left < right) {
        if (nums[left] > 0 || nums[right] < 0)
            break;
        if (nums[left] * -1 > nums[right])
            left++;
        else if (nums[left] * -1 < nums[right])
            right--;
        else {
            max = Math.max(max, nums[right]);
            left++;
            right--;
        }
    }
    return max;
}
;
console.log(findMaxK([-1, 2, -3, 3])); // Output: 3
console.log(findMaxK([-1, 10, 6, 7, -7, 1])); // Output: 7
