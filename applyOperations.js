function applyOperations(nums) {
    var _a;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (!nums[i]) {
                _a = [nums[j], nums[i]], nums[i] = _a[0], nums[j] = _a[1];
            }
            else
                break;
        }
    }
    return nums;
}
;
console.log(applyOperations([1, 2, 2, 1, 1, 0])); // Output: [4, 2, 0, 0, 0, 0]
console.log(applyOperations([0, 1])); // Output: [1, 0]
console.log(applyOperations([2, 2, 0, 4, 0, 8])); // Output: [4, 4, 8, 0, 0, 0]
