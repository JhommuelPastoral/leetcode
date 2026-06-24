"use strict";
function fourSum(nums, target) {
    let res = [];
    const seen = new Set();
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length - 4; i++) {
        for (let j = i + 1; j <= nums.length - 3; j++) {
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum > target)
                    right--;
                else if (sum < target)
                    left++;
                else {
                    const str = `${nums[i]},${nums[j]},${nums[left]},${nums[right]}`;
                    if (!seen.has(str)) {
                        seen.add(str);
                        res.push([nums[i], nums[j], nums[left], nums[right]]);
                    }
                    right--;
                    left++;
                }
            }
        }
    }
    return res;
}
;
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
