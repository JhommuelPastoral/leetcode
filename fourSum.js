function fourSum(nums, target) {
    var res = [];
    var seen = new Set();
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i <= nums.length - 4; i++) {
        for (var j = i + 1; j <= nums.length - 3; j++) {
            var left = j + 1;
            var right = nums.length - 1;
            while (left < right) {
                var sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum > target)
                    right--;
                else if (sum < target)
                    left++;
                else {
                    var str = "".concat(nums[i], ",").concat(nums[j], ",").concat(nums[left], ",").concat(nums[right]);
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
