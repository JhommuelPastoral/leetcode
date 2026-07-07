function maximumGap(nums) {
    var max = 0;
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, Math.abs(nums[i] - nums[i + 1]));
    }
    return max;
}
;
console.log(maximumGap([3, 6, 9, 1])); // Output: 3
console.log(maximumGap([10])); // Output: 0
console.log(maximumGap([1, 10000000])); // Output: 9999999
