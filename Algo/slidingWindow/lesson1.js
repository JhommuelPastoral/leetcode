"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
function maxSumSubArray(nums, k) {
    let sum = 0;
    for (let i = 0; i <= nums.length - k; i++) {
        let temp = 0;
        for (let j = i; j < i + k; j++) {
            temp += nums[j];
        }
        if (temp > sum)
            sum = temp;
    }
    return sum;
}
;
function maxSumSubArrayOptimized(nums, k) {
    let window = nums.slice(0, k).reduce((a, b) => a + b, 0);
    let max = window;
    for (let i = k; i < nums.length; i++) {
        window += nums[i];
        window -= nums[i - k];
        max = Math.max(max, window);
    }
    return max;
}
const arr = [1, 4, 1, 10, 25, 3, 5, 0, 26];
exports.arr = arr;
console.log(maxSumSubArray(arr, 4));
console.log(maxSumSubArrayOptimized(arr, 4));
