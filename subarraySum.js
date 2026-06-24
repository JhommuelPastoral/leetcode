"use strict";
function subarraySum(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        const start = Math.max(0, i - nums[i]);
        for (let j = start; j <= i; j++)
            res += nums[j];
    }
    return res;
}
;
console.log(subarraySum([1, 2, 3]));
console.log(subarraySum([1, 1, 1]));
console.log(subarraySum([1, 2, 3, 4, 5]));
