"use strict";
function countPairs(nums, k) {
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= j)
                continue;
            if (nums[i] === nums[j] && (i * j) % k === 0)
                pairs++;
        }
    }
    return pairs;
}
;
console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
