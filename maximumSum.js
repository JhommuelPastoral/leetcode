"use strict";
function maximumSum(nums) {
    let max = -1;
    const sumArr = [];
    for (const num of nums) {
        let str = num.toString();
        let sum = 0;
        if (str.length === 1)
            sum = num;
        else {
            for (const digit of str)
                sum += Number.parseInt(digit);
        }
        sumArr.push(sum);
    }
    console.log(sumArr);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j)
                continue;
            if (sumArr[i] === sumArr[j])
                max = Math.max(max, nums[i] + nums[j]);
        }
    }
    return max;
}
;
console.log(maximumSum([51, 71, 17, 42])); // 93
console.log(maximumSum([1, 2, 3, 4, 5, 6])); // 21
