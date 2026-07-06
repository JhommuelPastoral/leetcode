function minimumSum(nums) {
    var sum = Infinity;
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            if (nums[i] >= nums[j])
                continue;
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[k] >= nums[j])
                    continue;
                sum = Math.min(sum, nums[i] + nums[j] + nums[k]);
            }
        }
    }
    return sum === Infinity ? -1 : sum;
}
;
console.log(minimumSum([1, 2, 3, 4, 5])); // -1
console.log(minimumSum([5, 4, 3, 2, 1])); // -1
