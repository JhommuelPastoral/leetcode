"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function threeSum(nums) {
    const res = [];
    const seen = new Set();
    const sorted = nums.sort((a, b) => a - b);
    const length = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        let left = i + 1;
        let right = length;
        if (first > 0)
            break;
        while (left < right) {
            if (first + nums[left] + nums[right] > 0)
                right--;
            else if (first + nums[left] + nums[right] < 0)
                left++;
            else if (first + nums[left] + nums[right] === 0) {
                const str = `${first},${nums[left]},${nums[right]}`;
                if (!seen.has(str)) {
                    seen.add(str);
                    res.push([first, nums[left], nums[right]]);
                }
                right--;
            }
        }
    }
    return res;
}
const start = performance.now();
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0,0,0]]
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
