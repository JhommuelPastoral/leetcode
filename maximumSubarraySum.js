function maximumSubarraySum(nums, k) {
    var max = -Infinity;
    var map = new Map();
    var tempSum = 0;
    var prefix = [];
    for (var i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        prefix[i] = tempSum;
    }
    for (var i = 0; i < nums.length; i++) {
        var target1 = nums[i] - k;
        var target2 = nums[i] + k;
        if (map.has(target1)) {
            var sum = prefix[i] - map.get(target1);
            max = Math.max(max, sum);
        }
        if (map.has(target2)) {
            var sum = prefix[i] - map.get(target2);
            max = Math.max(max, sum);
        }
        var currentPrefix = prefix[i] - nums[i];
        if (!map.has(nums[i]) || currentPrefix < map.get(nums[i])) {
            map.set(nums[i], currentPrefix);
        }
    }
    return max === -Infinity ? 0 : max;
}
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 1));
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 2));
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 3));
