"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function threeSum(nums) {
    var res = [];
    var seen = new Set();
    var sorted = nums.sort(function (a, b) { return a - b; });
    var length = nums.length - 1;
    for (var i = 0; i < nums.length; i++) {
        var first = nums[i];
        var left = i + 1;
        var right = length;
        if (first > 0)
            break;
        while (left < right) {
            if (first + nums[left] + nums[right] > 0)
                right--;
            else if (first + nums[left] + nums[right] < 0)
                left++;
            else if (first + nums[left] + nums[right] === 0) {
                var str = "".concat(first, ",").concat(nums[left], ",").concat(nums[right]);
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
var start = performance.now();
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0,0,0]]
var end = performance.now();
console.log("Execution time: ".concat(end - start, " ms"));
